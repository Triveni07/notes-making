import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from '@material-ui/core';

import { onDelete, onEdit, onNoteClick } from './Util/NoteUtil';
import './Note.scss';

class Note extends Component {

    handleDelete = () => {
        const { dispatch, note } = this.props;
        onDelete(dispatch, note);
    }

    handleEdit = () => {
        const { dispatch, note } = this.props;
        onEdit(dispatch, note);
    }

    handleNoteClick = () => {
        const { dispatch, note } = this.props;
        onNoteClick(dispatch, note);
    }

    render() {
        const { note, showButtons } = this.props;
        const timeStamp = note.timeStamp;
        return (
            <div id="note-card">
                <div className="note-buttons">
                    {showButtons
                        ?
                        <>
                            <Button
                                color="primary"
                                type="submit"
                                onClick={this.handleEdit}>
                                Edit
                            </Button>
                            <Button
                                color="secondary"
                                type="submit"
                                onClick={this.handleDelete}>
                                Delete
                            </Button>
                        </>
                        : <div className="timeStamp">{timeStamp}</div>
                    }
                </div>
                <div className="note-content" onClick={this.handleNoteClick}>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                </div>
            </div>
        );
    }
}

export default connect()(Note);