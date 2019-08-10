import React, { Component } from 'react';

//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Main from './components/Main/Main';
import CreateNote from './components/Notes/CreateNote';
import ListNotes from './components/Notes/ListNotes';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateNote />
        <ListNotes />
      </div>
    );
  }
}


export default App;
