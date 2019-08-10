import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Card } from '@material-ui/core';

class Note extends Component {

    handleDelete = (e) => {
        console.log('deleting', e);
        const { dispatch, note } = this.props;
        dispatch({ type: 'DELETE_NOTE', id: note.id });
    }

    handleEdit = (e) => {
        console.log('Editing', e);
        const { dispatch, note } = this.props;
        dispatch({ type: 'EDIT_NOTE', id: note.id });
    }

    render() {
        const { note } = this.props;
        return (
            <Card>
                <h2>{note.title}</h2>
                <p className="note-content">{note.content}</p>
                <Button color="primary" type="submit" onClick={this.handleEdit}>Edit</Button>
                <Button color="secondary" type="submit" onClick={this.handleDelete}>Delete</Button>
            </Card>
        );
    }
}

export default connect()(Note);