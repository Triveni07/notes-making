import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import { onSearchQueryEnter } from './Util/NoteUtil';

import './SearchBox.scss'

class SearchBox extends Component {

    handleChange = (e) => {
        e.preventDefault();
        const { dispatch, notes } = this.props;
        const query = e.target.value;
        console.log('query', query);
        const searchedNotes = onSearchQueryEnter(dispatch, query, notes);
        console.log('searchedNotes', searchedNotes);
        this.props.getSearchedNotes(searchedNotes);
    }

    render() {
        return (
            <div className="search-box">
                <Paper className="search-paper">
                    <InputBase
                        className="search-input"
                        id="search-query"
                        placeholder="Search Notes"
                        inputProps={{ 'aria-label': 'search note here' }}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <IconButton
                        className="search-iconButton"
                        aria-label="search"
                        type="submit">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
        );
    }
}

export default SearchBox;