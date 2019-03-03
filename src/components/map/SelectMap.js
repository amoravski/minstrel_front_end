import React, { Component } from 'react';                                                     
import { Map, TileLayer, Marker } from 'react-leaflet';
import { connect } from 'react-redux';

import { geocode, reverseGeocode } from '../../actions';

type State = {
  lat: number,
  lng: number,
  zoom: number,
} 
  
class SelectMap extends Component<{}, State> {
  state = {
    lat: 42.698334,
    lng: 23.319941,
    zoom: 12,
    marker: {lat: 42.69, lng: 23.31}
  } 
    
  componentDidMount () {
    // Removes annoying zoom control, maybe find a prettier way to do this?
    document.querySelector(".leaflet-top").remove();
  } 

  addMarker = (e) => {
    console.log(e.latlng);
    this.setState({marker: e.latlng});
    this.props.reverseGeocode([e.latlng.lat, e.latlng.lng]);
  }
    
  render() {
    const position = [this.state.lat, this.state.lng]
      return (
    <div style={{height: `${this.props.height}`}}>
      <Map dragging={this.props.interact} onClick={this.addMarker} scrollWheelZoom={this.props.interact} center={position} zoom={this.state.zoom} style={{height: "100%"}}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'   
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        { this.state.marker ?  
        <Marker key={`marker-1`} position={this.state.marker} />
        : ''}
      </Map>
    </div>
    )
  }
}

const mapStateToProps = state => {
    return { geolocation: state.geolocation };
}

export default connect(mapStateToProps, { geocode, reverseGeocode })(SelectMap);
