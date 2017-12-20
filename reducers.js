import { combineReducers } from 'redux';
import {
  SUCCESS_SUGGESTS, CLEAR_SUGGESTS, SET_KEYWORD, CLEAR_KEYWORD
} from './actions';

const initial = {
  app: {},
  search: {
    keyword: '',
    suggests: [],
    fetching: false,
    error: false
  }
};

const handlers = {
  app: {},
  search: {
    [SUCCESS_SUGGESTS]: (state, action) => {
      return { ...state, suggests: action.payload };
    },
    [CLEAR_SUGGESTS]: (state, action) => {
      return { ...state, suggests: initial.search.suggests.slice() };
    },
    [SET_KEYWORD]: (state, action) => {
      return { ...state, keyword: action.payload };
    },
    [CLEAR_KEYWORD]: (state, action) => {
      return { ...state, keyword: initial.search.keyword };
    }
  }
};

function app(state = initial.app, action) {
  const handler = handlers.app[action.type];
  if (!handler) { return state; }
  return handler(state, action);
}

function search(state = initial.search, action) {
  const handler = handlers.search[action.type];
  if (!handler) { return state; }
  return handler(state, action);
}

export default combineReducers(
  { app, search }
);
