import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from '@material-ui/core';

class Note extends Component {

    handleDelete = (e) => {
        console.log('deleting', e);
        const { dispatch, note } = this.props;
        dispatch({ type: 'DELETE_NOTE', id: note.id });
    }

    handleEdit = (e) => {
        const { dispatch, note } = this.props;
        dispatch({ type: 'EDIT_NOTE', id: note.id });
    }

    render() {
        const { note, noteClicked } = this.props;
        console.log('noteClicked', noteClicked);
        return (
            <div id="note-card">
                <div className="note-content">
                    <h2>{note.title}</h2>
                    <p>{note.content}</p>
                </div>
                <div className="note-buttons">
                    <Button color="primary" type="submit" onClick={this.handleEdit}>Edit</Button>
                    <Button color="secondary" type="submit" onClick={this.handleDelete}>Delete</Button>
                </div>
            </div>
        );
    }
}

export default connect()(Note);