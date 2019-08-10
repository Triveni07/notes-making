import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom'
import { TextField, Button, Card } from '@material-ui/core';
import propTypes from 'prop-types';

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

        const { history } = this.props;
        history.push('/');
    }

    render() {
        return (
            <div className="notes-container">
                <Card>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <TextField
                            placeholder="Enter note title"
                            className="field"
                            id="title"
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
                            label="description"
                            variant="outlined"
                            required
                            fullWidth
                            multiline
                        />
                        <br /><br />
                        <Button color="primary" type="submit">Save</Button>
                        <Button color="tertiary" type="submit">
                            <Link to='/'>Close</Link>
                        </Button>
                    </form>
                </Card>
            </div>
        );
    }
}

CreateNote.propTypes = {
    history: propTypes.shape({}).isRequired,
};

export default connect()(CreateNote);