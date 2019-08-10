import React, { Component } from 'react';

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
        console.log(noteDetails);
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

export default CreateNote;