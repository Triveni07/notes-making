const NoteReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return state.concat([action.noteDetails]);

        case 'DELETE_NOTE':
            return state.filter((note) => note.id !== action.id);

        case 'EDIT_NOTE':
            return state.map((note) => note.id === action.id ? { ...note, editing: !note.editing } : note)

        case 'UPDATE':
            return state.map((note) => {
                if (note.id === action.id) {
                    return {
                        ...note,
                        title: action.noteDetails.newTitle,
                        content: action.noteDetails.newContent,
                        editing: !note.editing
                    }
                } else return note;
            })

        default:
            return state;
    }
}

export default NoteReducer;
