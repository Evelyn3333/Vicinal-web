import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Login} from "./Login"
import {Register} from "./Register"
import {Home} from "./Home";

export class Main extends React.Component{
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/home" component={Home}/>
                    <Route component={Login}/>
                </Switch>
            </div>
        );
    }
}