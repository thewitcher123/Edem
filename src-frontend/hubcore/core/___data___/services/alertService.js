import {Map} from 'immutable';

export const SUCCESS = 'ALERT_SUCCESS';
export const ERROR = 'ALERT_ERROR';
export const WARNING = 'ALERT_WARNING';
export const CLEAR = 'ALERT_CLEAR';

export const alertActionCreators = {
    success(message) {
        return {type: SUCCESS, message};
    },

    error(message) {
        return {type: ERROR, message};
    },

    warning(header, message) {
        return {type: WARNING, header, message};
    },

    clear() {
        return {type: CLEAR};
    }
};

const initialState = Map({
    type: '',
    header: '',
    message: ''
});

export const alertService = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS:
            return state
                .set('type', 'green')
                .set('message', action.message);

        case WARNING:
            return state
                .set('type', 'orange')
                .set('header', action.header)
                .set('message', action.message);

        case ERROR:
            return state
                .set('type', 'red')
                .set('message', action.message);

        case CLEAR:
            return state
                .set('type', '')
                .set('message', '');
        default:
            return state
    }
};
