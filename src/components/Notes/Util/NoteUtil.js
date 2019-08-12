export function onSave(e, dispatch) {
    const { target } = e;
    const title = target.querySelector('#title').value;
    const content = target.querySelector('#content').value;

    const noteDetails = {
        id: new Date(),
        title,
        content,
        editing: false
    }

    dispatch({
        type: 'ADD_NOTE',
        noteDetails
    });

    target.querySelector('#title').value = '';
    target.querySelector('#content').value = '';

    window.alert('Hey! Your note saved');
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