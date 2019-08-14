import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { Button, Card, TextField } from '@material-ui/core';

import { onSave } from './../../Util/NoteUtil';
import '../styles/CreateNote.scss';

class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    state = {
        saved: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        try {
            onSave(e, dispatch);
            this.setState({ saved: 'success' });
        } catch (err) {
            this.setState({ saved: 'error' });
            console.error(err);
        }
    }

    handleOnchange = () => {
        this.setState({ saved: '' });
    }

    render() {
        const { saved } = this.state;

        // To notify user on note saving 
        let messageDiv;
        if (saved === 'success') {
            messageDiv = <div className="success-message">
                <i className="fa fa-check" aria-hidden="true"></i>
                <span>Success!</span>
            </div>
        } else if (saved === 'error') {
            messageDiv = <div className="error-message">
                <i className="fa fa-times-circle" aria-hidden="true"></i>
                <span>Error!</span>
            </div>
        }

        return (
            <div className="notes-container">
                <div className="notes-box">
                    <div className="message">
                        {messageDiv}
                    </div>
                    <Card className="notes-card">
                        <form onSubmit={e => this.handleSubmit(e)} className="notes-form">
                            <TextField
                                placeholder="Title"
                                id="title"
                                variant="outlined"
                                required
                                fullWidth
                                onChange={this.handleOnchange}
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
            </div >
        );
    }
}

export default connect()(CreateNote);