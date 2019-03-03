import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import { getPerformers } from '../../actions';

class DisplayMap extends Component {
    state = {
        // TO-DO: Get location from browser location, right now it's just Sofia
        lat: 42.698334,
        lng: 23.319941,
        zoom: 12,
    }

    componentDidMount() {
        this.props.getPerformers();
        // Removes annoying zoom control, maybe find a prettier way to do this?
        document.querySelector(".leaflet-top").remove();
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <div style={{ height: `${this.props.height}` }}>
                <Map dragging={this.props.interact} scrollWheelZoom={this.props.interact} center={position} zoom={this.state.zoom} style={{ height: "100%" }}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <div>
                        {this.props.performers.map(marker =>
                            <Marker key={marker.email} position={marker.location}>
                                <Popup>
                                    <span>
                                        <b>{marker.username}</b>
                                        <br />
                                        categories:
                                        <br />
                                        {marker.categories.map(category =>
                                            <div key={category}>
                                                {category}
                                            </div>
                                        )}
                                    </span>
                                </Popup>
                            </Marker>
                        )}
                    </div>
                </Map>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { performers: state.performers };
}

export default connect(mapStateToProps, { getPerformers })(DisplayMap);
