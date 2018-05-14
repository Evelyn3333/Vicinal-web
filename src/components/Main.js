import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {Login} from "./Login"
import {Register} from "./Register"
import {Home} from "./Home";


export class Main extends React.Component{
    getLogin = () => {
        return this.props.isLogIn ? <Redirect to='/home'/> : <Login handleLogIn={this.props.handleLogIn}/>;
    }

    getHome = () => {
        return this.props.isLogIn ? <Home/> : <Redirect to='/login'/>
    }
    getRoot = () => {
        return <Redirect to='/login'/>
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={this.getRoot}/>
                    <Route path="/login" render={this.getLogin}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/home" render={this.getHome}/>
                    <Route component={Login}/>
                </Switch>
            </div>
        );
    }
}