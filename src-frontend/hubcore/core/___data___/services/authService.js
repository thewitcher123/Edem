import {Map} from 'immutable';

import {dispatchAsync} from "../dispatcher/dispatcher";
import {createRequest} from "../helpers/apiHelper";
import {setUserToCache, getUserFromCache, removeUser} from "../../___data___/helpers/cacheHelper";

/* Constants */
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const LOGOUT = 'USERS_LOGOUT';


/* ActionCreators */
export const authActionCreators = {
    login(from, type, body, currentVersion, callback) {
        return (dispatch) => {
            dispatchAsync(createRequest(from, type, body), dispatch, {
                request: AUTH_REQUEST,
                success: AUTH_SUCCESS,
                failure: AUTH_FAILURE
            }, {from, type, body, currentVersion, callback})
        };
    },

    logout() {
        return {
            type: LOGOUT
        }
    }
};

/* init */
const user = getUserFromCache();
const initialState = user
    ? Map({
        gettingAuth: false,
        isAuthorized: true,
        user,
        showApiMessage: true,
    })
    : Map({
        gettingAuth: false,
        isAuthorized: false,
        user: null,
        showApiMessage: true,
    });


/* Reducers */
export const authorization = (state = initialState, action) => {
    switch (action.type) {

        case AUTH_REQUEST:
            return state
                .set('gettingAuth', true);

        case AUTH_SUCCESS:
            if (!action.payload.error) {
                setUserToCache(action.payload.userData);
                return state
                    .set('gettingAuth', false)
                    .set('isAuthorized', true)
                    .set('user', action.payload.userData);
            }
            return state
                .set('CurrentText', false)
                .set('gettingAuth', false)
                .set('isAuthorized', false)
                .set('user', null);

        case AUTH_FAILURE:
            return state
                .set('gettingAuth', false)
                .set('isAuthorized', true)
                //.set('isAuthorized', false)
                .set('user', null);

        case LOGOUT:
            //removeUser();
            return state
                .set('isAuthorized', false)
                .set('user', null);

        default:
            return state
    }
};
