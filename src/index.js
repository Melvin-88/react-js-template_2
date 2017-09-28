import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import axiosMiddleware from 'redux-axios-middleware';
import api from "./actions/api";
import rootReducer from "./reducers/index";
import routes from './routes/routes';

import '../assets/css/bootstrap.min.css';
import '../assets/style.css';
import '../node_modules/react-datetime/css/react-datetime.css';
import '../node_modules/react-select/dist/react-select.min.css';

const history = createBrowserHistory();
const appRouterMiddleware = routerMiddleware(history);
const createStoreWithMiddleware = applyMiddleware(axiosMiddleware(api), appRouterMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer, {}, window.devToolsExtension ? window.devToolsExtension() : f => f);

render(
  <Provider store={store}>
    <ConnectedRouter history={history} children={routes}/>
   </Provider>,
document.querySelector('.wrapper'));
