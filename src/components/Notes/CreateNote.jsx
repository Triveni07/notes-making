import React, { Component } from 'react';

class CreateNote extends Component {
    render() {
        return (
            <div>
                <h1>Create Note</h1>
                <form>
                    <input required type="text" placeholder="Enter note title" /><br /><br />
                    <textarea required rows="5" cols="28" placeholder="Add notes here.." /><br /><br />
                    <button>Save</button>
                </form>
            </div>
        );
    }
}

export default CreateNote;