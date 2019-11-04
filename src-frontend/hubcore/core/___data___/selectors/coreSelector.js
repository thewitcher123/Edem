import {createSelector} from 'reselect';

export const flagSelector = (selector, name) => createSelector(
    selector, (map) => map.get(name)
);

export const coreStateSlice = (state) => state.core;
const authStateSlice = (state) => state.authorization;


const isAuthorized = flagSelector(authStateSlice, 'isAuthorized');
const gettingAuth = flagSelector(authStateSlice, 'gettingAuth');
const user = flagSelector(authStateSlice, 'user');
const showApiMessage = flagSelector(authStateSlice, 'showApiMessage');

const apiConfig = flagSelector(coreStateSlice, 'apiConfig');
const currentVersion = flagSelector(coreStateSlice, 'currentVersion');


export const getCoreData = createSelector(
    isAuthorized,
    gettingAuth,
    user,
    showApiMessage,
    apiConfig,
    currentVersion,
    (isAuthorized,
     gettingAuth,
     user,
     showApiMessage,
     apiConfig,
     currentVersion) => ({
        isAuthorized,
        gettingAuth,
        user,
        showApiMessage,
        apiConfig,
        currentVersion
    })
);