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

package operator_api

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/foroughfor/console/models"
)

// GetPVCEventsOKCode is the HTTP code returned for type GetPVCEventsOK
const GetPVCEventsOKCode int = 200

/*GetPVCEventsOK A successful response.

swagger:response getPVCEventsOK
*/
type GetPVCEventsOK struct {

	/*
	  In: Body
	*/
	Payload models.EventListWrapper `json:"body,omitempty"`
}

// NewGetPVCEventsOK creates GetPVCEventsOK with default headers values
func NewGetPVCEventsOK() *GetPVCEventsOK {

	return &GetPVCEventsOK{}
}

// WithPayload adds the payload to the get p v c events o k response
func (o *GetPVCEventsOK) WithPayload(payload models.EventListWrapper) *GetPVCEventsOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get p v c events o k response
func (o *GetPVCEventsOK) SetPayload(payload models.EventListWrapper) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetPVCEventsOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	payload := o.Payload
	if payload == nil {
		// return empty array
		payload = models.EventListWrapper{}
	}

	if err := producer.Produce(rw, payload); err != nil {
		panic(err) // let the recovery middleware deal with this
	}
}

/*GetPVCEventsDefault Generic error response.

swagger:response getPVCEventsDefault
*/
type GetPVCEventsDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewGetPVCEventsDefault creates GetPVCEventsDefault with default headers values
func NewGetPVCEventsDefault(code int) *GetPVCEventsDefault {
	if code <= 0 {
		code = 500
	}

	return &GetPVCEventsDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the get p v c events default response
func (o *GetPVCEventsDefault) WithStatusCode(code int) *GetPVCEventsDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the get p v c events default response
func (o *GetPVCEventsDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the get p v c events default response
func (o *GetPVCEventsDefault) WithPayload(payload *models.Error) *GetPVCEventsDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get p v c events default response
func (o *GetPVCEventsDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetPVCEventsDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
