export function onSave(e, dispatch) {
    const { target } = e;
    const title = target.querySelector('#title').value;
    const content = target.querySelector('#content').value;

    const timeStamp = new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    })
    const noteDetails = {
        id: new Date(),
        title,
        content,
        editing: false,
        showButtons: false,
        timeStamp: timeStamp
    }
    target.querySelector('#title').value = '';
    target.querySelector('#content').value = '';

    dispatch({
        type: 'ADD_NOTE',
        noteDetails
    });
}

export function onUpdate(e, dispatch, note) {
    const { target } = e;
    const newTitle = target.querySelector('#title').value;
    const newContent = target.querySelector('#content').value;
    const noteDetails = {
        newTitle,
        newContent
    }
    dispatch({
        type: 'UPDATE',
        id: note.id,
        noteDetails: noteDetails
    })
}

export function onDelete(dispatch, note) {
    dispatch({ type: 'DELETE_NOTE', id: note.id });
}

export function onEdit(dispatch, note) {
    dispatch({ type: 'EDIT_NOTE', id: note.id });
}

export function onNoteClick(dispatch, note) {
    dispatch({ type: 'SHOW_NOTE_CARD', id: note.id });
}

export function onSearchQueryEnter(match, notes) {
    try {
        const searchResults = notes.filter((note) => match.test(note.title));
        return searchResults;
    } catch (error) {
        console.err(error);
    }
}