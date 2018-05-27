import React from 'react';
import {GoogleMap, withGoogleMap, withScriptjs} from "react-google-maps";
import {Marker} from "./Marker";

class Map extends React.Component {

    render() {
        const locations = [{lat: -34.397, lng: 150.044}, {lat: -34.297, lng: 150.344}, {lat: -34.197, lng: 150.644},];
        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{lat: -34.397, lng: 150.644}}
            >
                {locations.map((loc) => <Marker locations={loc}/>)}
            </GoogleMap>

        );
    }
}

export const WrappedMap = withScriptjs(withGoogleMap(Map));
