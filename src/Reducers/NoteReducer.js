const NoteReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return state.concat([action.noteDetails]);
        default:
            return state;
    }
}

export default NoteReducer;
