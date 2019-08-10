import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import CreateNote from '../Notes/CreateNote';
import ListNotes from '../Notes/ListNotes';

import './Main.scss';

class Main extends Component {
    render() {
        return (
            <div className="content_container">
                <div className="background" />
                <div className="content">
                    <Switch>
                        <Route path='/create' render={({ history }) => (
                            <CreateNote history={history} />
                        )} />
                        <Route path='/' render={({ history }) => (
                            <ListNotes />
                        )} />
                        <Route path="*" render={() => <h1>404</h1>} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Main;