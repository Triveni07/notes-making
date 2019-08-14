import React from 'react';

import UpdateNote from './UpdateNote';
import Note from './Note';

const ListNotes = (props) => {
    const { showingNotesList, notesLength } = props;

    // Show message on empty list
    if (showingNotesList.length === 0 && notesLength === 0) {
        return (
            <div className="empty-list">
                <span>Please click on add icon to create notes...</span>
            </div>
        );
    }

    return (
        <div>
            <ul className='notes-grid'>
                {showingNotesList.map(note =>
                    <li key={note.id} className='note-list-item'>
                        <div key={note.id} className="note-item">
                            {note.editing ?
                                <UpdateNote
                                    key={note.id}
                                    note={note}
                                /> :
                                <Note
                                    key={note.id}
                                    note={note}
                                    showButtons={note.showButtons}
                                />
                            }
                        </div>
                    </li>
                )}
            </ul>

        </div>
    );
}

export default ListNotes;