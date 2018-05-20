import React from 'react';
import {API_ROOT, AUTH_PREFIX, GEO_OPTION, POS_KEY, TOKEN_KEY} from "../constants";
import {Button, Spin, Tabs} from 'antd';
import $ from 'jquery';

const TabPane = Tabs.TabPane;


export class Home extends React.Component {
    state = {
        loadingGeoLocation: false,
        loadingPost: false,
        error: '',
    }

    componentDidMount() {
        this.getGeoLocation();
    }

    getGeoLocation = () => {
        this.setState({loadingGeoLocation: true, error: ''})
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                this.onSuccessLoadGeoLocation,
                this.onFailLoadGeoLocation,
                GEO_OPTION,
            );
        } else {
            this.setState({ error: 'Your browser does not support geolocation!' });
        }
    }

    onSuccessLoadGeoLocation = (position) => {
        this.setState({
            loadingGeoLocation: false,
            loadingPost: false,
            error: ''
        });
        console.log(position);
        const {latitude, longitude} = position.coords;
        localStorage.setItem(POS_KEY, JSON.stringify({lat: latitude, lon: longitude}));
        this.loadNearbyPosts();
    }

    onFailLoadGeoLocation = (error) => {
        this.setState({
            loadingGeoLocation: false,
            error: 'Failed to load your location!'
        });
        console.log(error);
        this.setState({ error: 'Your browser does not support geolocation!' });
    }

    loadNearbyPosts = () => {
        this.setState({
            loadingPost: true,
            error: ''
        });
        const {lat, lon} = JSON.parse(localStorage.getItem(POS_KEY));
        $.ajax({
            url: `${API_ROOT}/search?lat=${lat}&lon=${lon}&range=20000`,
            method: 'GET',
            headers: {Authorization: `${AUTH_PREFIX} ${localStorage.getItem(TOKEN_KEY)}`,},
        }).then((response) => {
            console.log(response);
            this.setState({ posts: response, loadingPosts: false, error: '' });
            this.setState({ error: 'Your browser does not support geolocation!' });
        }, (response) => {
            this.setState({ loadingPosts: false, error: response.responseText });
            console.log(response.responseText);
        }).catch((error) => {
            console.log(error);
        });
    }

    getGalleryPanelContent = () => {
        if (this.state.error) {
            return <div>{this.state.error}</div>
        } else if (this.state.loadingGeoLocation) {
            return <Spin tip="Loading Location..."/>;
        } else if (this.state.loadingPost) {
            return <Spin tip="Loading Post..."/>;
        } else {
            return '';
        }
    }


    render() {
        const operations = <Button type="primary">Create New Post</Button>;

        return (
            <div className="tabs">
                <Tabs tabBarExtraContent={operations}>
                    <TabPane tab="Post" key="1"> {this.getGalleryPanelContent()}
                    </TabPane>
                    <TabPane tab="Map" key="2">Map</TabPane>
                </Tabs>
            </div>
        )
    }
}