import escapeRegExp from 'escape-string-regexp';
const uuidv4 = require('uuid/v4');

const timeStamp = () => new Date().toLocaleString(undefined, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
})
const onSave = (input, dispatch) => {
    const noteDetails = {
        id: uuidv4(),
        title: input.title,
        content: input.content,
        editing: false,
        showButtons: false,
        timeStamp: timeStamp()
    }

    dispatch({
        type: 'ADD_NOTE',
        noteDetails
    });
}

const onUpdate = (inputForUpdate, dispatch, note) => {
    const newNoteDetails = inputForUpdate;
    const newTime = timeStamp();

    dispatch({
        type: 'UPDATE',
        id: note.id,
        timeStamp: newTime,
        noteDetails: newNoteDetails
    });

    // dispatch action to hide edit and delete button on update
    dispatch({ type: 'SHOW_NOTE_CARD', id: note.id });
}

const onDelete = (dispatch, note) => {
    dispatch({ type: 'DELETE_NOTE', id: note.id });
}

const onEdit = (dispatch, note) => {
    dispatch({ type: 'EDIT_NOTE', id: note.id });
}

const onNoteClick = (dispatch, note) => {
    dispatch({ type: 'SHOW_NOTE_CARD', id: note.id });
}

const onSearchQueryEnter = (query, notes) => {
    const match = new RegExp(escapeRegExp(query), 'i')
    try {
        const searchResults = notes.filter((note) => match
            .test(`${note.title}${note.content}`));
        return searchResults;
    } catch (error) {
        console.err(error);
    }
}

export {
    onSave,
    onUpdate,
    onEdit,
    onDelete,
    onNoteClick,
    onSearchQueryEnter
};