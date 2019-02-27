import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

type State = {
  lat: number,
  lng: number,
  zoom: number,
}

const markers = [
    { position: [42.5, 23.3], text: "Music" },
    { position: [42.6, 23.4], text: "Dances" }
];

export default class DefaultMap extends Component<{}, State> {
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
        {markers.map(marker => 
        <Marker position={marker.position}>
          <Popup>
            <span>{marker.text}</span>
          </Popup>
        </Marker>
        )}
      </Map>
    </div>
    )
  }
}
