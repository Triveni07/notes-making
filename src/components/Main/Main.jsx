import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import CreateNote from '../Notes/CreateNote';
import HomePage from '../Notes/HomePage';

import './Main.scss';

class Main extends Component {
    render() {
        return (
            <div className="content-container">
                <div className="content">
                    <Switch>
                        <Route path='/create' render={({ history }) => (
                            <CreateNote />
                        )} />
                        <Route path='/' render={({ history }) => (
                            <HomePage />
                        )} />
                        <Route path="*" render={() => <h1>404</h1>} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Main;