const NoteReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return state.concat([action.noteDetails]);

        case 'DELETE_NOTE':
            return state.filter((note) => note.id !== action.id);

        case 'EDIT_NOTE':
            return state.map((note) => note.id === action.id ? { ...note, editing: !note.editing } : note)

        // To display notes with edit or delete button
        case 'SHOW_NOTE_CARD':
            return state.map((note) => note.id === action.id ? { ...note, showButtons: !note.showButtons } : note)

        case 'UPDATE':
            return state.map((note) => {
                if (note.id === action.id) {
                    return {
                        ...note,
                        title: action.noteDetails.newTitle,
                        content: action.noteDetails.newContent,
                        timeStamp: action.timeStamp,
                        editing: !note.editing
                    }
                } else return note;
            })

        default:
            return state;
    }
}

export default NoteReducer;
