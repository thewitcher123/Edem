import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import configureStore from '../../___data___/config/configureStore';

import CoreContainer from '../../containers/CoreContainer/CoreContainer'

const store = configureStore();

export const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route path='/' component={CoreContainer} />
            </BrowserRouter>
        </Provider>
    )
};