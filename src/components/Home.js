import React from 'react';
import {GEO_OPTION} from "../constants";
import { Tabs, Button } from 'antd';

const TabPane = Tabs.TabPane;


export class Home extends React.Component {
    state = {
        loadingGeoLocation: false,
    }
    componentDidMount() {
        this.setState({
            loadingGeoLocation: true,
        });
        this.getGeoLocation();
    }

    getGeoLocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                this.onSuccessLoadGeoLocation,
                this.onFailLoadGeoLocation,
                GEO_OPTION,
            );

        } else {
            /* geolocation IS NOT available */
        }
    }

    onSuccessLoadGeoLocation = (position) => {
        this.setState ({
            loadingGeoLocation: false,
        });
        console.log(position);
    }

    onFailLoadGeoLocation = (error) => {
        this.setState ({
            loadingGeoLocation: false,
        });
        console.log(error);
    }

    render() {
        const operations = <Button type="primary">Create New Post</Button>;

        return (
            <div className="tabs">
                <Tabs tabBarExtraContent={operations}>
                    <TabPane tab="Post" key="1">Post</TabPane>
                    <TabPane tab="Map" key="2">Map</TabPane>
                </Tabs>
            </div>
        )
    }
}