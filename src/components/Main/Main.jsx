import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import CreateNote from '../Notes/CreateNote';
import HomePage from '../Notes/HomePage';
import ErrorBoundary from '../Notes/ErrorBoundary';

import './Main.scss';

class Main extends Component {
    render() {
        return (
            <div className="main-container">
                <Switch>
                    <Route path='/create' render={({ history }) => (
                        <ErrorBoundary>
                            <CreateNote />
                        </ErrorBoundary>
                    )} />
                    <Route path='/' render={({ history }) => (
                        <ErrorBoundary>
                            <HomePage />
                        </ErrorBoundary>
                    )} />
                    <Route path="*" render={() => <h1>404</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Main;