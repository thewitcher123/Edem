import { Map } from 'immutable';

import {dispatchAsync} from "../dispatcher/dispatcher";
import {createRequest} from "../helpers/apiHelper";


/* Constants */
export const TEST_API_CONNECTION_REQUEST = 'TEST_API_CONNECTION_REQUEST';
export const TEST_API_CONNECTION_SUCCESS = 'TEST_API_CONNECTION_SUCCESS';
export const TEST_API_CONNECTION_FAILURE = 'TEST_API_CONNECTION_FAILURE';


/* ActionCreators */
export const coreActionCreators = {
    testApiConnection(callback, errorCallback) {
        // todo проверить связь с апи, если связи нет - выдать ошибку, отключить кнопку логина
        return (dispatch) => {
            dispatchAsync(createRequest({body: null}), dispatch, {
                request: TEST_API_CONNECTION_REQUEST,
                success: TEST_API_CONNECTION_SUCCESS,
                failure: TEST_API_CONNECTION_FAILURE
            }, {from, type, callback, errorCallback})
        };
    }
};


/* init */
export const initialCoreState = Map({
    currentVersion: "0.0.1",
    apiConfig: true
});


/* Reducers */
export const core = (state = initialCoreState, action) => {
    switch (action.type) {
        case TEST_API_CONNECTION_REQUEST:
            return state
                .set('isLoading', true);

        case TEST_API_CONNECTION_SUCCESS:
            return state
                .set('apiConfig', action.payload && action.payload.body)
                .set('isLoading', false);

        case TEST_API_CONNECTION_FAILURE:
            return state
                .set('apiConfig', null)
                .set('isLoading', false);

        default:
            return state
    }
};

