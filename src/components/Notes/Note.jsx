import React, { Component } from 'react';

class Note extends Component {
    render() {
        const { note } = this.props;
        console.log('note:', note);
        return (
            <div>
                <h2>{note.title}</h2>
                <p>{note.content}</p>

            </div>
        );
    }
}

export default Note;