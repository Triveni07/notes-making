import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from '@material-ui/core';

import { onDelete, onEdit } from './Util/NoteUtil';

class EditAndDeleteNote extends Component {

    handleDelete = () => {
        const { dispatch, note } = this.props;
        onDelete(dispatch, note);
    }

    handleEdit = () => {
        const { dispatch, note } = this.props;
        onEdit(dispatch, note);

    }

    render() {
        const { note } = this.props;

        return (
            <div id="note-card">
                <div className="note-buttons">
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
                </div>
                <div className="note-content">
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                </div>
            </div>
        );
    }
}

export default connect()(EditAndDeleteNote);