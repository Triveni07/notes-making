import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { Button, Card, TextField } from '@material-ui/core';

import { onSave } from './../../Util/NoteUtil';
import '../styles/CreateNote.scss';

class CreateNote extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        onSave(e, dispatch);
    }

    render() {
        return (
            <div className="notes-container">
                <div className="notes-box">
                    <Card className="notes-card">
                        <form onSubmit={e => this.handleSubmit(e)} className="notes-form">
                            <TextField
                                placeholder="Title"
                                id="title"
                                variant="outlined"
                                required
                                fullWidth
                            />
                            <br /><br />
                            <TextField
                                placeholder="Add notes here..."
                                id="content"
                                variant="outlined"
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

export default connect()(CreateNote);