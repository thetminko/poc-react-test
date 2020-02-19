import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, } from 'redux';
import { Provider } from 'react-redux';
import appReducers from './redux/reducers';
import appSaga from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  appReducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(appSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
