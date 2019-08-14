import React from 'react';

const Notification = (props) => {
    const { formSaved } = props;

    let messageDiv;
    if (formSaved === 'success') {
        messageDiv = <div className="success-message">
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>Success!</span>
        </div>
    } else if (formSaved === 'error') {
        messageDiv = <div className="error-message">
            <i className="fa fa-times-circle" aria-hidden="true"></i>
            <span>Error!</span>
        </div>
    }

    return (
        <div>
            {messageDiv}
        </div>
    );
}

export default Notification;