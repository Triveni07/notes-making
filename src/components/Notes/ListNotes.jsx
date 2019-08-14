import React from 'react';

import UpdateNote from './UpdateNote';
import Note from './Note';

const ListNotes = (props) => {
    const { showingNotesList } = props;
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