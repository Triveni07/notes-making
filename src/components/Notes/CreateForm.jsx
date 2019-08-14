import React from 'react';
import { Link } from 'react-router-dom'

import { Button, Card, TextField } from '@material-ui/core';

const CreateForm = (props) => {
    const { handleSubmit, handleOnChange } = props;

    const handleCreateForm = (e) => {
        e.preventDefault();
        const { target } = e;
        const title = target.querySelector('#title').value;
        const content = target.querySelector('#content').value;
        const formInput = { title, content };

        handleSubmit(formInput);
        target.querySelector('#title').value = '';
        target.querySelector('#content').value = '';
    }
    const handleTitleInput = () => {
        handleOnChange();
    }
    return (
        <Card className="notes-card">
            <form onSubmit={e => handleCreateForm(e)} className="notes-form">
                <TextField
                    placeholder="Title"
                    id="title"
                    variant="outlined"
                    required
                    fullWidth
                    onChange={() => handleTitleInput()}
                />
                <br /><br />
                <TextField
                    placeholder="Add notes here..."
                    id="content"
                    variant="outlined"
                    rows={16}
                    required
                    fullWidth
                    multiline
                />
                <br /><br />
                <div className="form-button">
                    <Button color="primary" type="submit">Save</Button>
                    <Button color="default" type="submit">
                        <Link to='/'>Close</Link>
                    </Button>
                </div>
            </form>
        </Card>
    );
}

export default CreateForm;