import React from "react";
import ReactDOM, { render } from 'react-dom';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import App from './App';
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App name='teja' inc="10" />
    </Provider>,
    document.getElementById('root')
);