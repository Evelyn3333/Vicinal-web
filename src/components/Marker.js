import React from 'react';
import { InfoWindow } from "react-google-maps";

export class Marker extends React.Component {
    state = {
        isOpen: false,
    }

    onToggleOpen = () => {
        this.setState((prevState) => {
            return { isOpen: !prevState.isOpen };
        });
    }

    render(){
        const { location } = this.props;

        return(
            <Marker
                position={location}
                onClick={this.onToggleOpen}
            >
                {this.state.isOpen ?
                    <InfoWindow onCloseClick={this.onToggleOpen}>
                        <div>
                            content.
                        </div>
                    </InfoWindow> : null}
            </Marker>
        );
    }
}