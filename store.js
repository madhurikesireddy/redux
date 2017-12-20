import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducer from './reducers';
import rootSaga from './sagas';

const list = [createSagaMiddleware(rootSaga)];
if (window && !window.__karma__) {
  list.push(logger());
}

export default createStore(reducer, applyMiddleware(...list));
