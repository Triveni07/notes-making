import React, { Component } from 'react';

import { connect } from 'react-redux';

class EditNote extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newContent = this.getContent.value;
        const noteDetails = {
            newTitle,
            newContent
        }
        const { dispatch, note } = this.props;
        dispatch({ type: 'UPDATE', id: note.id, noteDetails: noteDetails })
    }

    render() {
        const { note } = this.props;
        return (
            <div>
                <form onSubmit={this.handleEdit}>
                    <input
                        required
                        type="text"
                        placeholder="Enter note title"
                        ref={(input) => this.getTitle = input}
                        defaultValue={note.title}
                    />
                    <br /><br />
                    <textarea
                        required
                        rows="5"
                        cols="28"
                        placeholder="Add notes here.."
                        ref={(input) => this.getContent = input}
                        defaultValue={note.content}
                    />
                    <br /><br />
                    <button>Update</button>
                </form>
            </div>
        );
    }
}

export default connect()(EditNote);