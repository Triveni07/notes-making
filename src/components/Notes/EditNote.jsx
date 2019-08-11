import React, { Component } from 'react';

import { connect } from 'react-redux';

import { TextField, Button, Card } from '@material-ui/core';
import propTypes from 'prop-types';

import './CreateNote.scss';

class EditNote extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const { target } = e;
        const newTitle = target.querySelector('#title').value;
        const newContent = target.querySelector('#content').value;

        const noteDetails = {
            newTitle,
            newContent
        }

        console.log(noteDetails);

        const { dispatch, note } = this.props;
        dispatch({
            type: 'UPDATE',
            id: note.id,
            noteDetails: noteDetails
        })
    }

    render() {
        const { note } = this.props;
        return (
            <div className="notes-container">
                <div className="notes-box">
                    <Card className="notes-card">
                        <form onSubmit={e => this.handleEdit(e)}>
                            <TextField
                                placeholder="Title"
                                className="title"
                                id="title"
                                variant="filled"
                                defaultValue={note.title}
                                required
                                fullWidth
                            />
                            <br /><br />
                            <TextField
                                placeholder="Add notes here..."
                                className="field"
                                id="content"
                                variant="filled"
                                defaultValue={note.content}
                                rows={16}
                                required
                                fullWidth
                                multiline
                            />
                            <br /><br />
                            <div className="form-button">
                                <Button color="primary" type="submit">
                                    Update
                                </Button>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        );
    }
}

EditNote.propTypes = {
    history: propTypes.shape({}).isRequired,
};

export default connect()(EditNote);