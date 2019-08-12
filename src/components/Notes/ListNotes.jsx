import React, { Component } from 'react';

import UpdateNote from './UpdateNote';
import Note from './Note';

class ListNotes extends Component {
    render() {
        const { showingNotesList } = this.props;
        return (
            <div>
                <ol className='notes-grid'>
                    {showingNotesList.map(note =>
                        <li key={note.id} className='note-list-item'>
                            <div key={note.id} className="note-item">
                                {note.editing ?
                                    <UpdateNote
                                        key={note.id}
                                        note={note}
                                    />
                                    :
                                    <Note
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
        );
    }
}

export default ListNotes;