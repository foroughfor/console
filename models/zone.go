// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2020 MinIO, Inc.
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

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// Zone zone
//
// swagger:model zone
type Zone struct {

	// affinity
	Affinity *ZoneAffinity `json:"affinity,omitempty"`

	// name
	Name string `json:"name,omitempty"`

	// NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
	NodeSelector map[string]string `json:"node_selector,omitempty"`

	// resources
	Resources *ZoneResources `json:"resources,omitempty"`

	// servers
	// Required: true
	Servers *int64 `json:"servers"`

	// tolerations
	Tolerations ZoneTolerations `json:"tolerations,omitempty"`

	// volume configuration
	// Required: true
	VolumeConfiguration *ZoneVolumeConfiguration `json:"volume_configuration"`

	// volumes per server
	// Required: true
	VolumesPerServer *int32 `json:"volumes_per_server"`
}

// Validate validates this zone
func (m *Zone) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateAffinity(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateResources(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateServers(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateTolerations(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateVolumeConfiguration(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateVolumesPerServer(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *Zone) validateAffinity(formats strfmt.Registry) error {

	if swag.IsZero(m.Affinity) { // not required
		return nil
	}

	if m.Affinity != nil {
		if err := m.Affinity.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("affinity")
			}
			return err
		}
	}

	return nil
}

func (m *Zone) validateResources(formats strfmt.Registry) error {

	if swag.IsZero(m.Resources) { // not required
		return nil
	}

	if m.Resources != nil {
		if err := m.Resources.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("resources")
			}
			return err
		}
	}

	return nil
}

func (m *Zone) validateServers(formats strfmt.Registry) error {

	if err := validate.Required("servers", "body", m.Servers); err != nil {
		return err
	}

	return nil
}

func (m *Zone) validateTolerations(formats strfmt.Registry) error {

	if swag.IsZero(m.Tolerations) { // not required
		return nil
	}

	if err := m.Tolerations.Validate(formats); err != nil {
		if ve, ok := err.(*errors.Validation); ok {
			return ve.ValidateName("tolerations")
		}
		return err
	}

	return nil
}

func (m *Zone) validateVolumeConfiguration(formats strfmt.Registry) error {

	if err := validate.Required("volume_configuration", "body", m.VolumeConfiguration); err != nil {
		return err
	}

	if m.VolumeConfiguration != nil {
		if err := m.VolumeConfiguration.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("volume_configuration")
			}
			return err
		}
	}

	return nil
}

func (m *Zone) validateVolumesPerServer(formats strfmt.Registry) error {

	if err := validate.Required("volumes_per_server", "body", m.VolumesPerServer); err != nil {
		return err
	}

	return nil
}

// MarshalBinary interface implementation
func (m *Zone) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *Zone) UnmarshalBinary(b []byte) error {
	var res Zone
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

// ZoneVolumeConfiguration zone volume configuration
//
// swagger:model ZoneVolumeConfiguration
type ZoneVolumeConfiguration struct {

	// size
	// Required: true
	Size *int64 `json:"size"`

	// storage class name
	StorageClassName string `json:"storage_class_name,omitempty"`
}

// Validate validates this zone volume configuration
func (m *ZoneVolumeConfiguration) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateSize(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *ZoneVolumeConfiguration) validateSize(formats strfmt.Registry) error {

	if err := validate.Required("volume_configuration"+"."+"size", "body", m.Size); err != nil {
		return err
	}

	return nil
}

// MarshalBinary interface implementation
func (m *ZoneVolumeConfiguration) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *ZoneVolumeConfiguration) UnmarshalBinary(b []byte) error {
	var res ZoneVolumeConfiguration
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}