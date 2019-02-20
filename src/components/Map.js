
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
    zoom: 12,
  }

  componentDidMount () {
    // Removes annoying zoom control, maybe find a prettier way to do this?
    document.querySelector(".leaflet-top").remove();
  }

  render() {
    const position = [this.state.lat, this.state.lng]
      return (
    <div style={{height: `${this.props.height}`}}>
      <Map dragging={this.props.interact} scrollWheelZoom={this.props.interact} center={position} zoom={this.state.zoom} style={{height: "100%"}}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      </Map>
    </div>
    )
  }
}
