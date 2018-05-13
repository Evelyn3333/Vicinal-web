import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {Login} from "./Login"
import {Register} from "./Register"
import {Home} from "./Home";

export class Main extends React.Component{
    getLogin = () => {
        return this.props.isLogIn ? <Redirect to='/home'/> : <Login handleLogIn={this.props.handleLogIn}/>;
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={this.getLogin}/>
                    <Route path="/login" render={this.getLogin}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/home" component={Home}/>
                    <Route component={Login}/>
                </Switch>
            </div>
        );
    }
}