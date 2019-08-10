import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateNote extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const content = this.getContent.value;
        const noteDetails = {
            id: new Date(),
            title,
            content
        }

        const { dispatch } = this.props;
        dispatch({
            type: 'ADD_NOTE',
            noteDetails
        });
        this.getTitle.value = '';
        this.getContent.value = '';
    }

    render() {
        return (
            <div>
                <h1>Create Note</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        required
                        type="text"
                        placeholder="Enter note title"
                        ref={(input) => this.getTitle = input}
                    />
                    <br /><br />
                    <textarea
                        required
                        rows="5"
                        cols="28"
                        placeholder="Add notes here.."
                        ref={(input) => this.getContent = input}
                    />
                    <br /><br />
                    <button>Save</button>
                </form>
            </div>
        );
    }
}

export default connect()(CreateNote);