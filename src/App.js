import React, { Component } from 'react';
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
