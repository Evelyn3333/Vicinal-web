import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";


class Map extends React.Component {
    render() {
        return(
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                <Marker
                    position={{ lat: -34.397, lng: 150.644 }}
                >
                </Marker>
            </GoogleMap>

        );
    }
}

export const WrappedMap = withScriptjs(withGoogleMap(Map));
