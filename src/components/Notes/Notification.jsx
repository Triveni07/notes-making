import React from 'react';

const Notification = (props) => {
    const { messageType } = props;

    // Add message notifications eg. success, error, warning, info etc. 
    let messageDiv;
    switch (messageType) {
        case 'success':
            messageDiv = <div className="success-message">
                <i className="fa fa-check" aria-hidden="true"></i>
                <span>Note added!</span>
            </div>
            break;

        case 'error':
            messageDiv = <div className="error-message">
                <i className="fa fa-times-circle" aria-hidden="true"></i>
                <span>There was an error!</span>
            </div>
            break;

        default:
            break;
    }

    return (
        <>
            {messageDiv}
        </>
    );
}

export default Notification;