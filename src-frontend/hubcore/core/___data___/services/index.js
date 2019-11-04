import { combineReducers } from 'redux';

import {alertService} from "./alertService";
import {core} from "./coreService";
import {authorization} from "./authService";


const rootReducer = combineReducers({
    alertService,
    authorization,
    core
});

export default rootReducer