import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Fab, Paper, InputBase } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

import ListNotes from '../Notes/ListNotes';

import { onSearchQueryEnter } from './Util/NoteUtil';

import './SearchBox.scss'
import './ListNotes.scss';

class HomePage extends Component {

    state = {
        query: ''
    }

    handleSearch = (query) => {
        this.setState({ query: query.trim() });
    }

    render() {
        const { notes } = this.props;
        const { query } = this.state;

        let showingNotesList;
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showingNotesList = onSearchQueryEnter(match, notes);
        } else showingNotesList = notes;

        showingNotesList.sort(sortBy('title'));

        return (
            <div className="list-notes-container">
                <div className="list-notes-content">
                    <div className="header">
                        <h2>Notes</h2>
                        <div className="search-box">
                            <Paper className="search-paper">
                                <SearchIcon />
                                <InputBase
                                    className="search-input"
                                    id="search-query"
                                    placeholder="Search Notes"
                                    value={query}
                                    onChange={(e) => this.handleSearch(e.target.value)}
                                />
                            </Paper>
                        </div>
                    </div>
                    <ListNotes
                        showingNotesList={showingNotesList}

                    />
                </div>

                <div className="create-button">
                    <Link to='/create'>
                        <Fab color="default" aria-label="add note">
                            <AddIcon />
                        </Fab>
                    </Link>
                </div>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state
    }
}
export default connect(mapStateToProps)(HomePage);
