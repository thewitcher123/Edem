import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {LoginPage} from '../../components/LoginPage/LoginPage';
import AuthWrapper from '../../components/AuthWrapper/AuthWrapper'

import {authActionCreators} from "../../___data___/services/authService";

import {getCoreData} from "../../___data___/selectors/coreSelector";

class LoginPageContainer extends Component {
    render() {
        const {actions, apiConfig, gettingAuth} = this.props;
        return (
            <AuthWrapper apiConfig={apiConfig}>
                <LoginPage
                    gettingAuth={gettingAuth}
                    actions={actions}
                    disableLogin={!apiConfig}
                />
            </AuthWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    const {apiConfig, gettingAuth} = getCoreData(state);
    return {apiConfig, gettingAuth}
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(authActionCreators, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPageContainer)