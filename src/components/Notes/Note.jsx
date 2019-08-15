import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { onDelete, onEdit, onNoteClick } from './../../Util/NoteUtil';
import '../styles/Note.scss';

const Note = (props) => {
    const { dispatch, note, showButtons } = props;
    console.log(note);

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
                            color="default"
                            type="submit"
                            onClick={() => handleEdit()}>
                            <EditIcon />
                        </Button>
                        <Button
                            color="secondary"
                            type="submit"
                            onClick={() => handleDelete()}>
                            <DeleteIcon />
                        </Button>
                    </>
                    : <div className="timeStamp">{note.timeStamp}</div>
                }
            </div>
            <div className="note-content" onClick={() => handleNoteClick()}>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
            </div>
        </div>
    );
}

Note.propTypes = {
    dispatch: PropTypes.func.isRequired,
    note: PropTypes.shape({
        id: PropTypes.any,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        editing: PropTypes.bool,
        showButtons: PropTypes.bool,
        timeStamp: PropTypes.string
    })
};

export default connect()(Note);