// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { IMessageEvent, w3cwebsocket as W3CWebSocket } from "websocket";
import { Button, CircularProgress, Grid } from "@mui/material";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import moment from "moment/moment";
import PageHeader from "../Common/PageHeader/PageHeader";
import {
  actionsTray,
  advancedFilterToggleStyles,
  containerForHeader,
  formFieldStyles,
  searchField,
} from "../Common/FormComponents/common/styleLibrary";
import { wsProtocol } from "../../../utils/wsUtils";
import { SpeedTestResponse } from "./types";
import { AppState } from "../../../store";
import { SpeedtestIcon } from "../../../icons";
import {
  CONSOLE_UI_RESOURCE,
  IAM_SCOPES,
} from "../../../common/SecureComponent/permissions";
import STResults from "./STResults";
import InputBoxWrapper from "../Common/FormComponents/InputBoxWrapper/InputBoxWrapper";
import ProgressBarWrapper from "../Common/ProgressBarWrapper/ProgressBarWrapper";
import InputUnitMenu from "../Common/FormComponents/InputUnitMenu/InputUnitMenu";
import CheckboxWrapper from "../Common/FormComponents/CheckboxWrapper/CheckboxWrapper";
import PageLayout from "../Common/Layout/PageLayout";
import SecureComponent from "../../../common/SecureComponent/SecureComponent";
import DistributedOnly from "../Common/DistributedOnly/DistributedOnly";

interface ISpeedtest {
  classes: any;
  distributedSetup: boolean;
}

const styles = (theme: Theme) =>
  createStyles({
    advancedContent: {
      backgroundColor: "#FBFAFA",
      maxHeight: 0,
      transitionDuration: "0.3s",
      overflow: "hidden",
      padding: "0 15px",
      marginTop: 15,
      justifyContent: "space-between",
      "&.open": {
        maxHeight: 400,
        paddingBottom: 15,
      },
    },
    progressContainer: {
      padding: "0 15px",
    },
    stepProgressText: {
      fontSize: 13,
      marginBottom: 8,
    },
    advancedOption: {
      marginTop: 20,
    },
    advancedAutotune: {
      marginTop: 10,
    },
    ...advancedFilterToggleStyles,
    ...actionsTray,
    ...searchField,
    ...formFieldStyles,
    ...containerForHeader(theme.spacing(4)),
  });

const Speedtest = ({ classes, distributedSetup }: ISpeedtest) => {
  const [start, setStart] = useState<boolean>(false);

  const [currStatus, setCurrStatus] = useState<SpeedTestResponse[] | null>(
    null
  );
  const [duration, setDuration] = useState<string>("10");
  const [durationUnit, setDurationUnit] = useState<string>("s");
  const [size, setSize] = useState<string>("64");
  const [sizeUnit, setSizeUnit] = useState<string>("MB");
  const [concurrent, setConcurrent] = useState<string>("32");
  const [topDate, setTopDate] = useState<number>(0);
  const [currentValue, setCurrentValue] = useState<number>(0);
  const [totalSeconds, setTotalSeconds] = useState<number>(0);
  const [speedometerValue, setSpeedometerValue] = useState<number>(0);
  const [advancedOpen, setAdvancedOpen] = useState<boolean>(false);
  const [autotune, setAutotune] = useState<boolean>(true);

  useEffect(() => {
    // begin watch if bucketName in bucketList and start pressed
    if (start) {
      const url = new URL(window.location.toString());
      const isDev = process.env.NODE_ENV === "development";
      const port = isDev ? "9090" : url.port;

      const wsProt = wsProtocol(url.protocol);
      const c = new W3CWebSocket(
        `${wsProt}://${url.hostname}:${port}/ws/speedtest?${
          autotune ? "autotune=true" : ""
        }&duration=${duration}${durationUnit}&size=${size}${sizeUnit}${
          concurrent.trim() !== "" ? `&concurrent=${concurrent}` : ""
        }`
      );

      const baseDate = moment();

      const currentTime = baseDate.unix() / 1000;

      const incrementDate =
        baseDate
          .add(
            parseInt(duration) * 2,
            durationUnit as moment.unitOfTime.DurationConstructor
          )
          .unix() / 1000;

      const totalSeconds = (incrementDate - currentTime) / 1000;

      setTopDate(incrementDate);
      setCurrentValue(currentTime);
      setTotalSeconds(totalSeconds);

      let interval: any | null = null;
      if (c !== null) {
        c.onopen = () => {
          console.log("WebSocket Client Connected");
          c.send("ok");
          interval = setInterval(() => {
            c.send("ok");
          }, 10 * 1000);
        };
        c.onmessage = (message: IMessageEvent) => {
          const data: SpeedTestResponse = JSON.parse(message.data.toString());

          setCurrStatus((prevStatus) => {
            let prSt: SpeedTestResponse[] = [];
            if (prevStatus) {
              prSt = [...prevStatus];
            }

            const insertData = data.servers !== 0 ? [data] : [];
            return [...prSt, ...insertData];
          });

          const currTime = moment().unix() / 1000;
          setCurrentValue(currTime);
        };
        c.onclose = () => {
          clearInterval(interval);
          console.log("connection closed by server");
          // reset start status
          setStart(false);
        };
        return () => {
          // close websocket on useEffect cleanup
          c.close(1000);
          clearInterval(interval);
          console.log("closing websockets");
        };
      }
    } else {
      // reset start status
      setStart(false);
    }
  }, [concurrent, duration, durationUnit, size, sizeUnit, start, autotune]);

  useEffect(() => {
    const actualSeconds = (topDate - currentValue) / 1000;

    let percToDisplay = 100 - (actualSeconds * 100) / totalSeconds;

    if (percToDisplay > 100) {
      percToDisplay = 100;
    }

    setSpeedometerValue(percToDisplay);
  }, [start, currentValue, topDate, totalSeconds]);

  return (
    <Fragment>
      <PageHeader label="Performance" />
      <PageLayout>
        {!distributedSetup ? (
          <DistributedOnly
            iconComponent={<SpeedtestIcon />}
            entity={"Speedtest"}
          />
        ) : (
          <SecureComponent
            scopes={[IAM_SCOPES.ADMIN_HEAL]}
            resource={CONSOLE_UI_RESOURCE}
          >
            <Grid item xs={12} className={classes.boxy}>
              <Grid container>
                <Grid item>
                  <Button
                    onClick={() => {
                      setCurrStatus(null);
                      setStart(true);
                    }}
                    color="primary"
                    type="button"
                    variant={
                      currStatus !== null && !start ? "contained" : "outlined"
                    }
                    className={`${classes.buttonBackground} ${classes.speedStart}`}
                    disabled={
                      duration.trim() === "" || size.trim() === "" || start
                    }
                  >
                    {!start && (
                      <Fragment>
                        {currStatus !== null ? "Retest" : "Start"}
                      </Fragment>
                    )}
                    {start ? "Start" : ""}
                  </Button>
                </Grid>
                <Grid item md={9} sm={12} className={classes.progressContainer}>
                  <div className={classes.stepProgressText}>
                    {start ? (
                      "Speedtest in progress..."
                    ) : (
                      <Fragment>
                        {currStatus && !start
                          ? "Done!"
                          : "Start a new speed test"}
                      </Fragment>
                    )}
                    &nbsp;&nbsp;&nbsp;{start && <CircularProgress size={15} />}
                  </div>
                  <div>
                    <ProgressBarWrapper
                      value={speedometerValue}
                      ready={currStatus !== null && !start}
                      indeterminate={autotune && start}
                    />
                  </div>
                </Grid>
                <Grid item className={classes.advancedButton}>
                  <button
                    onClick={() => {
                      setAdvancedOpen(!advancedOpen);
                    }}
                    className={classes.advancedConfiguration}
                  >
                    {advancedOpen ? "Hide" : "Show"} advanced options{" "}
                    <span
                      className={
                        advancedOpen
                          ? classes.advancedOpen
                          : classes.advancedClosed
                      }
                    >
                      <ArrowForwardIosIcon />
                    </span>
                  </button>
                </Grid>
              </Grid>
              <Grid
                container
                className={`${classes.advancedContent} ${
                  advancedOpen ? "open" : ""
                }`}
              >
                <Grid item xs={12}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                  >
                    <Grid
                      item
                      xs={12}
                      md={4}
                      className={classes.advancedOption}
                    >
                      <InputBoxWrapper
                        id={"size"}
                        name={"size"}
                        label={"Object Size"}
                        onChange={(e) => {
                          setSize(e.target.value);
                        }}
                        value={size}
                        disabled={start}
                        overlayObject={
                          <InputUnitMenu
                            id={"size-unit"}
                            onUnitChange={setSizeUnit}
                            unitSelected={sizeUnit}
                            unitsList={[
                              { label: "KB", value: "KB" },
                              { label: "MB", value: "MB" },
                              { label: "GB", value: "GB" },
                            ]}
                            disabled={start}
                          />
                        }
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={4}
                      className={classes.advancedAutotune}
                    >
                      <CheckboxWrapper
                        checked={autotune}
                        onChange={(e) => setAutotune(e.target.checked)}
                        id={"autotune"}
                        name={"autotune"}
                        label={"Enable Autotune"}
                        tooltip={
                          "Autotune gets the maximum stats for the system by testing multiple configurations at once. This configuration is enabled by default and overrides duration & concurrent requests options"
                        }
                        value="true"
                        disabled={start}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                  >
                    <Grid
                      item
                      xs={12}
                      md={4}
                      className={classes.advancedOption}
                    >
                      <InputBoxWrapper
                        id={"duration"}
                        name={"duration"}
                        label={"Duration"}
                        onChange={(e) => {
                          setDuration(e.target.value);
                        }}
                        value={duration}
                        disabled={start || autotune}
                        overlayObject={
                          <InputUnitMenu
                            id={"duration-unit"}
                            onUnitChange={setDurationUnit}
                            unitSelected={durationUnit}
                            unitsList={[
                              { label: "miliseconds", value: "ms" },
                              { label: "seconds", value: "s" },
                            ]}
                            disabled={start || autotune}
                          />
                        }
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={4}
                      className={classes.advancedOption}
                    >
                      <InputBoxWrapper
                        type="number"
                        min="0"
                        id={"concurrent"}
                        name={"concurrent"}
                        label={"Concurrent Requests"}
                        onChange={(e) => {
                          setConcurrent(e.target.value);
                        }}
                        value={concurrent}
                        disabled={start || autotune}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container className={classes.multiModule}>
                <Grid item xs={12}>
                  <Fragment>
                    <Grid item xs={12}>
                      {currStatus !== null && (
                        <Fragment>
                          <STResults
                            results={currStatus}
                            start={start}
                            autotune={autotune}
                          />
                        </Fragment>
                      )}
                    </Grid>
                  </Fragment>
                </Grid>
              </Grid>
            </Grid>
          </SecureComponent>
        )}
      </PageLayout>
    </Fragment>
  );
};

const mapState = (state: AppState) => ({
  distributedSetup: state.system.distributedSetup,
});

const connector = connect(mapState, null);

export default connector(withStyles(styles)(Speedtest));
