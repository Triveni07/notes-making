import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom'
import { TextField, Button, Card } from '@material-ui/core';
import propTypes from 'prop-types';

import './CreateNote.scss';

class CreateNote extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const { target } = e;
        const title = target.querySelector('#title').value;
        const content = target.querySelector('#content').value;

        const noteDetails = {
            id: new Date(),
            title,
            content,
            editing: false
        }
        console.log(noteDetails);

        const { dispatch } = this.props;
        dispatch({
            type: 'ADD_NOTE',
            noteDetails
        });

        window.alert('Note saved', title);

        target.querySelector('#title').value = '';
        target.querySelector('#content').value = '';


    }

    render() {
        const { note, editing } = this.props;
        console.log('createNote', note, editing);
        return (
            <div className="notes-container">
                <div className="notes-box">
                    <Card className="notes-card">
                        <form onSubmit={e => this.handleSubmit(e)} className="notes-form">
                            <TextField
                                placeholder="Title"
                                className="title"
                                id="title"
                                variant="filled"
                                required
                                fullWidth
                            />
                            <br /><br />
                            <TextField
                                placeholder="Add notes here..."
                                className="field"
                                id="content"
                                variant="filled"
                                rows={16}
                                required
                                fullWidth
                                multiline
                            />
                            <br /><br />
                            <div className="form-button">
                                <Button color="primary" type="submit">Save</Button>
                                <Button color="default" type="submit">
                                    <Link to='/'>Close</Link>
                                </Button>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        );
    }
}

CreateNote.propTypes = {
    history: propTypes.shape({}).isRequired,
};

export default connect()(CreateNote);