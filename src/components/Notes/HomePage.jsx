import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Fab, InputBase, Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

import sortBy from 'sort-by';

import ListNotes from '../Notes/ListNotes';
import { onSearchQueryEnter } from './../../Util/NoteUtil';
import '../styles/ListNotes.scss';
import '../styles/HomePage.scss';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    state = {
        query: ''
    }

    handleSearch = (e) => {
        const query = e.target.value;
        this.setState({ query: query.trim() });
    }

    clearQuery = () => {
        this.setState({ query: '' });
    }

    render() {
        const { notes } = this.props;
        const { query } = this.state;

        let showingNotesList;
        if (query) {
            showingNotesList = onSearchQueryEnter(query, notes);
        } else showingNotesList = notes;
        showingNotesList.sort(sortBy('title'));

        return (
            <div className="home-container">
                <div className="home-content">
                    <div className="header">
                        <h2>Notes</h2>
                        <div className="search-box">
                            <Paper className="search-paper">
                                <SearchIcon />
                                <InputBase
                                    className="search-input"
                                    id="search-query"
                                    placeholder="Search notes here..."
                                    value={query}
                                    onChange={(e) => this.handleSearch(e)}
                                />
                            </Paper>
                        </div>
                    </div>
                    {/* To notify user on search results  */}
                    {showingNotesList.length !== notes.length && (
                        <div className="showing-notes">
                            <span>Now showing {showingNotesList.length} of {notes.length} total</span>
                            <button onClick={this.clearQuery}>Show all</button>
                        </div>
                    )}
                    <ListNotes
                        showingNotesList={showingNotesList}
                        notesLength={notes.length}
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
