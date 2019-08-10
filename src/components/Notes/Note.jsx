import React, { Component } from 'react';
import { connect } from 'react-redux';

class Note extends Component {

    handleDelete = (e) => {
        console.log('deleting', e);
        const { dispatch, note } = this.props;
        dispatch({ type: 'DELETE_NOTE', id: note.id });
    }

    render() {
        const { note } = this.props;
        return (
            <div>
                <h2>{note.title}</h2>
                <p>{note.content}</p>
                <button>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
}

export default connect()(Note);