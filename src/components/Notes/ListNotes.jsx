import React, { Component } from 'react';
import { connect } from 'react-redux';

import Note from './Note';

class ListNotes extends Component {
    render() {
        const { notes } = this.props;
        console.log(this.props);
        return (
            <div>
                List all notes
                {notes.map(note => <Note key={note.id} note={note} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state
    }
}
export default connect(mapStateToProps)(ListNotes);
