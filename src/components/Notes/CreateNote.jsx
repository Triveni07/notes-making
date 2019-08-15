import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { onSave } from './../../Util/NoteUtil';
import CreateForm from './CreateForm';
import Notification from './Notification';
import '../styles/CreateNote.scss';

class CreateNote extends PureComponent {
    state = {
        saved: ''
    }

    handleSubmit = (formInput) => {
        const { dispatch } = this.props;
        try {
            onSave(formInput, dispatch);
            this.setState({ saved: 'success' });
        } catch (err) {
            this.setState({ saved: 'error' });
            console.error(err);
        }
    }

    handleOnChange = () => {
        this.setState({ saved: '' });
    }

    render() {
        const { saved } = this.state;
        return (
            <div className="notes-container">
                <div className="notes-box">
                    <div className="message">
                        {/* To notify user on note saving */}
                        <Notification messageType={saved} />
                    </div>
                    <CreateForm
                        handleSubmit={this.handleSubmit}
                        handleOnChange={this.handleOnChange}
                    />
                </div>
            </div >
        );
    }
}

CreateNote.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect()(CreateNote);