import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

import rootReducer from '../services/index';

const middleware = [
    thunkMiddleware,
    createLogger({
        duration: true
    })
];

export default function configureStore(preState) {
    return createStore(
        rootReducer,
        preState,
        applyMiddleware(...middleware)
    )
}