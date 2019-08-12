import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TextField, Button } from '@material-ui/core';

import { onUpdate } from './../../Util/NoteUtil';

import '../styles/CreateNote.scss';

class UpdateNote extends Component {

    handleUpdate = (e) => {
        e.preventDefault();
        const { dispatch, note } = this.props;
        onUpdate(e, dispatch, note);
    }

    render() {
        const { note } = this.props;

        return (
            <div id="note-card">
                <form onSubmit={e => this.handleUpdate(e)} className="notes-form">
                    <div className="note-buttons">
                        <Button
                            color="primary"
                            type="submit">
                            Update
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
}

export default connect()(UpdateNote);