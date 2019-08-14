import React from 'react';
import { connect } from 'react-redux';

import { Button } from '@material-ui/core';

import { onDelete, onEdit, onNoteClick } from './../../Util/NoteUtil';
import '../styles/Note.scss';

const Note = (props) => {
    const { dispatch, note, showButtons } = props;

    const handleDelete = () => {
        onDelete(dispatch, note);
    }
    const handleEdit = () => {
        onEdit(dispatch, note);
    }
    const handleNoteClick = () => {
        onNoteClick(dispatch, note);
    }
    return (
        <div id="note-card">
            <div className="note-buttons">
                {showButtons ?
                    <>
                        <Button
                            color="primary"
                            type="submit"
                            onClick={handleEdit}>
                            Edit
                            </Button>
                        <Button
                            color="secondary"
                            type="submit"
                            onClick={handleDelete}>
                            Delete
                            </Button>
                    </>
                    : <div className="timeStamp">{note.timeStamp}</div>
                }
            </div>
            <div className="note-content" onClick={handleNoteClick}>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
            </div>
        </div>
    );
}

export default connect()(Note);