import React from 'react';
import {Header} from './Header.js';
import '../styles/App.css';
import {Main} from "./Main"
import {TOKEN_KEY} from "../constants"

class App extends React.Component {
    state = {
        isLogIn: Boolean(localStorage.getItem(TOKEN_KEY) )
    }

    handleLogIn = (token) => {
        localStorage.setItem(TOKEN_KEY, token);
        this.setState({isLogIn: true});
    }

    handleLogout = () => {
        localStorage.removeItem(TOKEN_KEY);
        this.setState({ isLogIn: false });
    }
    render() {
        return (
            <div className="App">
                <Header isLogIn={this.state.isLogIn} handleLogout={this.handleLogout}/>
                <Main isLogIn={this.state.isLogIn} handleLogIn={this.handleLogIn}/>
            </div>
        );
    }
}

export default App;
