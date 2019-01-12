
// @flow

import React, { Component } from 'react'
import { Map, TileLayer } from 'react-leaflet'

type State = {
  lat: number,
  lng: number,
  zoom: number,
}

export default class SimpleExample extends Component<{}, State> {
  state = {
    lat: 42.698334,
    lng: 23.319941,
    zoom: 14,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
      return (
    <div style={{height: "90%"}}>
      <Map center={position} zoom={this.state.zoom} style={{height: "100%"}}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      </Map>
    </div>
    )
  }
}
