import React, { Component } from 'react';
import { connect } from 'react-redux';

import Note from './Note';
import EditNote from './EditNote';
import './ListNotes.scss';

class ListNotes extends Component {
    state = {
        notes: []
    }

    render() {
        const { notes } = this.props;
        return (
            <div className="list-notes-container">
                <div className="list-notes-content">
                    <h2> List all notes</h2>
                    <ol className='notes-grid'>
                        {notes.map(note =>
                            <li key={note.id} className='note-list-item'>
                                <div key={note.id} className="note-item">
                                    {note.editing ?
                                        <EditNote note={note} key={note.id} />
                                        :
                                        <Note key={note.id}
                                            note={note}

                                        />}
                                </div>
                            </li>
                        )}
                    </ol>
                </div>
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
