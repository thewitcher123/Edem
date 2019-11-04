import {customStorage} from "../config/customStorage";

export const STORAGE_MAX_SIZE = 8 * 1024 * 1024; // 8MB

export const isStorageExceeded = (currentDataLength) => {
    return STORAGE_MAX_SIZE - JSON.stringify(customStorage).length - currentDataLength <= 0;
};

export const setCacheDataByName = (name, value) => {
    const valueStr = JSON.stringify(value);
    if (isStorageExceeded(valueStr.length)) {
        console.error("Quota exceed error. Data can't be saved.");
        return false;
    }
    customStorage.setItem(name, JSON.stringify(value));
    return true;
};

export const getCacheDataByName = (name) => {
    return JSON.parse(customStorage.getItem(name)) || null;
};

export const setUserToCache = (currentUser) => {
    setCacheDataByName('hubcore-user', currentUser);
};

export const getUserFromCache = () => {
    return getCacheDataByName('hubcore-user');
};

export const removeUser = () => {
    customStorage.removeItem('user');
};