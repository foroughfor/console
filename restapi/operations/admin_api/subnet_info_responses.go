// Code generated by go-swagger; DO NOT EDIT.

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
//

package admin_api

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/foroughfor/console/models"
)

// SubnetInfoOKCode is the HTTP code returned for type SubnetInfoOK
const SubnetInfoOKCode int = 200

/*SubnetInfoOK A successful response.

swagger:response subnetInfoOK
*/
type SubnetInfoOK struct {

	/*
	  In: Body
	*/
	Payload *models.License `json:"body,omitempty"`
}

// NewSubnetInfoOK creates SubnetInfoOK with default headers values
func NewSubnetInfoOK() *SubnetInfoOK {

	return &SubnetInfoOK{}
}

// WithPayload adds the payload to the subnet info o k response
func (o *SubnetInfoOK) WithPayload(payload *models.License) *SubnetInfoOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the subnet info o k response
func (o *SubnetInfoOK) SetPayload(payload *models.License) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *SubnetInfoOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*SubnetInfoDefault Generic error response.

swagger:response subnetInfoDefault
*/
type SubnetInfoDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewSubnetInfoDefault creates SubnetInfoDefault with default headers values
func NewSubnetInfoDefault(code int) *SubnetInfoDefault {
	if code <= 0 {
		code = 500
	}

	return &SubnetInfoDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the subnet info default response
func (o *SubnetInfoDefault) WithStatusCode(code int) *SubnetInfoDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the subnet info default response
func (o *SubnetInfoDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the subnet info default response
func (o *SubnetInfoDefault) WithPayload(payload *models.Error) *SubnetInfoDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the subnet info default response
func (o *SubnetInfoDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *SubnetInfoDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
