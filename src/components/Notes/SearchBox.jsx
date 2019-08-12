import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import './SearchBox.scss'

class SearchBox extends Component {
    handleSearch = (e) => {
        console.log('Search here');
    }

    render() {
        return (
            <div className="search-box">
                <Paper className="search-paper">
                    <InputBase
                        className="search-input"
                        placeholder="Search Notes"
                        inputProps={{ 'aria-label': 'search note here' }}
                    />
                    <IconButton className="search-iconButton" aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
        );
    }
}

export default SearchBox;