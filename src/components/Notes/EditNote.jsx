import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { TextField, Button, Card } from '@material-ui/core';
import propTypes from 'prop-types';

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
                <Card className="notes-box">
                    <form onSubmit={e => this.handleEdit(e)}>
                        <TextField
                            placeholder="Enter note title"
                            className="field"
                            id="title"
                            defaultValue={note.title}
                            label="title"
                            variant="outlined"
                            required
                            fullWidth
                        />
                        <br /><br />
                        <TextField
                            placeholder="Add notes here.."
                            className="field"
                            id="content"
                            defaultValue={note.content}
                            label="description"
                            variant="outlined"
                            required
                            fullWidth
                            multiline
                        />
                        <br /><br />
                        <Button color="primary" type="submit">Update</Button>
                        <Button color="primary" type="submit">
                            <Link to='/'>Close</Link>
                        </Button>
                    </form>
                </Card>
            </div>
        );
    }
}

EditNote.propTypes = {
    history: propTypes.shape({}).isRequired,
};

export default connect()(EditNote);