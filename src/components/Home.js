import React from 'react';
import {GEO_OPTION} from "../constants";

export class Home extends React.Component {
    componentDidMount() {

    }

    getGeoLocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                this.onSuccessLoadGeoLocation,
                this.onFailLoadGeoLocation(),
                GEO_OPTION,
            );

        } else {
            /* geolocation IS NOT available */
        }
    }

    onSuccessLoadGeoLocation = (position) => {
        console.log(position);
    }

    onFailLoadGeoLocation = (error) => {
        console.log(error);
    }

    render() {
        return (
            <div>
                home page
            </div>
        )
    }
}