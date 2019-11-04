import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {alertActionCreators} from "../../___data___/services/alertService";
import {Alert} from "../../components/Alert/Alert";
import {getAlert} from "../../___data___/selectors/alertSelector";

export const AlertContainer = ({ message, type, actions, className, header }) => {
    return (
        <Alert
            visible = { message.length > 0 }
            alertHeader = { header ? header : ''}
            alertContent = { message }
            alertColor = { type }
            onClear = { actions.clear }
            className={ className }
        />
    )
};

const mapStateToProps = (state) => {
    const {
        message,
        type,
        header
    } = getAlert(state);
    return {
        message,
        type,
        header
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(alertActionCreators, dispatch)
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AlertContainer)
