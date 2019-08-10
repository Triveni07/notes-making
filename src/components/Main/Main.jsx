import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import CreateNote from '../Notes/CreateNote';
import ListNotes from '../Notes/ListNotes';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Switch>
                    <Route path='/create' render={({ history }) => (
                        <CreateNote />
                    )} />
                    <Route path='/' render={({ history }) => (
                        <ListNotes />
                    )} />
                    <Route path="*" render={() => <h1>404</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Main;