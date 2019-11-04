import React, {Component} from 'react';

import './AuthWrapper.scss';


const API_CONNECTION_ERROR_MSG = "Нет соединения с сервером.";


class AuthWrapper extends Component {
    render() {
        const apiError = !this.props.apiConfig ?  <div className="api-error">{API_CONNECTION_ERROR_MSG}</div> : null;
        return (
            <div className="auth-wrapper">
                {apiError}
                <div className="auth">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default AuthWrapper;