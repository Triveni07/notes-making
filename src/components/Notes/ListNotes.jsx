import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import EditAndDeleteNote from './EditAndDeleteNote';
import UpdateNote from './UpdateNote';
import SearchBox from './SearchBox';
import './ListNotes.scss';

class ListNotes extends Component {
    state = {
        notes: [],
        searching: false
    }

    componentDidMount() {
        this.setState({ notes: this.props.notes });
    }

    getSearchedNotes = (searchedNotes) => {
        console.log('List Notes page', searchedNotes);
        if (searchedNotes.count !== 0) {
            this.setState({ notes: searchedNotes, searching: true });
        }
    }

    render() {
        const { searching } = this.state;
        const { notes } = (searching) ? this.state : this.props;

        return (
            <div className="list-notes-container">
                <div className="list-notes-content">
                    <header className="header">
                        <h2>Notes</h2>
                        <SearchBox
                            notes={notes}
                            getSearchedNotes={this.getSearchedNotes}
                        />
                    </header>
                    <ol className='notes-grid'>
                        {notes.map(note =>
                            <li key={note.id} className='note-list-item'>
                                <div key={note.id} className="note-item">
                                    {note.editing ?
                                        <UpdateNote
                                            key={note.id}
                                            note={note}
                                        />
                                        :
                                        <EditAndDeleteNote
                                            key={note.id}
                                            note={note}
                                            showButtons={note.showButtons}
                                        />
                                    }
                                </div>
                            </li>
                        )}
                    </ol>
                </div>

                <div className="create-button">
                    <Link to='/create'>
                        <Fab color="default" aria-label="add note">
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
