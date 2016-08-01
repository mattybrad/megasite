import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Main from './components/layouts/Main';
import * as Pages from './pages';

import './scss/main.scss';

const loggerMiddleware = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(
  	thunkMiddleware,
    loggerMiddleware
  )
);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="" component={Main}>
        <Route path="home" component={Pages.Home} />
        <Route path="listentries" component={Pages.ListEntries} />
        <Route path="*" component={Pages.NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
