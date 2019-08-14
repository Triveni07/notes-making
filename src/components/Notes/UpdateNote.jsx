import React from 'react';
import { connect } from 'react-redux';

import { TextField, Button } from '@material-ui/core';
import UpdateIcon from '@material-ui/icons/Update';

import { onUpdate } from './../../Util/NoteUtil'
import '../styles/Note.scss';

const UpdateNote = (props) => {
    const { dispatch, note } = props;

    const handleUpdate = (e) => {
        e.preventDefault();
        const { target } = e;
        const newTitle = target.querySelector('#title').value;
        const newContent = target.querySelector('#content').value;
        const inputForUpdate = { newTitle, newContent };
        onUpdate(inputForUpdate, dispatch, note);
    }

    return (
        <div id="note-card">
            <form onSubmit={e => handleUpdate(e)} className="notes-form">
                <div className="note-buttons">
                    <Button
                        color="default"
                        type="submit">
                        <UpdateIcon />
                    </Button>
                </div>
                <div className="note-content">
                    <TextField
                        defaultValue={note.title}
                        placeholder="Title"
                        id="title"
                        variant="outlined"
                        required
                        fullWidth
                    />
                    <br /><br />
                    <TextField
                        defaultValue={note.content}
                        placeholder="Add notes here..."
                        id="content"
                        rows={10}
                        required
                        fullWidth
                        multiline
                    />
                    <br /><br />
                </div>
            </form>
        </div>
    );
}

export default connect()(UpdateNote);