import * as React from 'react';

const BackendErrorMessages = ({ backendErrors  }) => {
    const errorMessages = Object.keys(backendErrors)
        .map((name) => {
            const messages = backendErrors[name].join(' ');

            return `${name} ${messages} `;
        });

    return (
        <ul>
            {errorMessages.map(message => <li style={{ color: 'red' }} key={message}>{message}</li>)}
        </ul>
    );
};

export default BackendErrorMessages;
