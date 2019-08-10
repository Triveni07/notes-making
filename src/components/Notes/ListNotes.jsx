import React, { Component } from 'react';
import { connect } from 'react-redux';

import Note from './Note';
import EditNote from './EditNote';

class ListNotes extends Component {
    render() {
        const { notes } = this.props;
        console.log(this.props);
        return (
            <div>
                List all notes
                {notes.map(note =>
                    <div key={note.id}>
                        {note.editing ? <EditNote note={note} key={note.id} /> :
                            <Note key={note.id} note={note} />}
                    </div>
                )}
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
