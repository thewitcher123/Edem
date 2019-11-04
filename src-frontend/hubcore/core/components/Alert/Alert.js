import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

import './Alert.scss';

export const Alert = ({ visible, alertHeader, alertContent, alertColor, onClear, className }) => {

    setTimeout(() => {
        if (alertContent && alertContent.length > 0 || !!visible) onClear();
    }, 5000);

    return (
        visible
            ?
            <Message
                color={ alertColor }
                onDismiss={ onClear }
                header={ alertHeader }
                content={ alertContent }
                className={ className }
            />
            : null
    )
};