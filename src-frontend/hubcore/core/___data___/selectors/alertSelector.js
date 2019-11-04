import { createSelector } from 'reselect';
import { flagSelector } from './coreSelector';

const alertStateSlice = (state) => state.alertService;

/*----- Имя пользователя для шапки сайта ------*/
const message = flagSelector(alertStateSlice, 'message');
const type  = flagSelector(alertStateSlice, 'type');
const header  = flagSelector(alertStateSlice, 'header');

export const getAlert = createSelector(
    message,
    type,
    header,
    (message, type, header) => ({
        message,
        type,
        header
    })
);