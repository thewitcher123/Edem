import {alertActionCreators} from '../services/alertService';

/**
 * This does the async request and provides Redux thunk feedback
 */
export function dispatchAsync(promise, dispatch, types, payload) {
    if (typeof dispatch !== 'function') {
        throw new Error('dispatch was not a function. Did you miss an update to the call?')
    }

    const {request, success, failure} = types;
    dispatch({
        type: request,
        payload: payload
    });
    promise
        .then((response) => {
            dispatch({
                type: success,
                success: true,
                payload: response.data,
                requestData: payload
            });
            if (response.data.error) {
                dispatch(alertActionCreators.error(response.data.error.msg));
            }
            return Promise.resolve();
        })
        .catch((error) => {
            dispatch(alertActionCreators.error(error.message));
            dispatch({
                type: failure,
                success: false,
                payload: {
                    data: {},
                    error: error.toString(),
                    errorCode: 1
                }
            });
            return Promise.reject(error);
        })
}