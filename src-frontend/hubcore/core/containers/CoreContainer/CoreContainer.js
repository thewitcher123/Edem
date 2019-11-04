import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import LoginPageContainer from '../LoginPageContainer/LoginPageContainer';
import Layout from '../../components/Layout/Layout';

import {getCoreData} from "../../___data___/selectors/coreSelector";

import {authActionCreators} from "../../___data___/services/authService";



class CoreContainer extends Component {

    render() {
        const {actions, isAuthorized} = this.props;
        return (
            isAuthorized ?
                <Layout handleLogout={actions.logout}/> :
                <LoginPageContainer/>
        )
    }
}

const mapStateToProps = (state) => {
    const {
        isAuthorized
    } = getCoreData(state);
    return {
        isAuthorized
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(authActionCreators, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CoreContainer)
