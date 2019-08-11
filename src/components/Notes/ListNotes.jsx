import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Note from './Note';
import EditNote from './EditNote';
import './ListNotes.scss';

class ListNotes extends Component {

    render() {
        const { notes } = this.props;
        return (
            <div className="list-notes-container">
                <div className="list-notes-content">
                    <header className="header">
                        <h2>Notes</h2>
                    </header>

                    <ol className='notes-grid'>
                        {notes.map(note =>
                            <li key={note.id} className='note-list-item'>
                                <div key={note.id} className="note-item">
                                    {note.editing ?
                                        <EditNote note={note} key={note.id} />
                                        :
                                        <Note key={note.id}
                                            note={note}
                                            editing={note.editing}
                                        />}
                                </div>
                            </li>
                        )}
                    </ol>
                </div>
                <div className="create-button">
                    <Link to='/create'>
                        <Fab color="default" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </Link>
                </div>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state
    }
}
export default connect(mapStateToProps)(ListNotes);
