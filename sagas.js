import { takeEvery, effects } from 'redux-saga';
import {
  FETCH_SUGGESTS, successSuggest
} from './actions';
import API from './api';

const { call, put } = effects;

function* fetchSuggests(action) {
  const suggestions = yield call(API.suggest, action.payload);
  yield put(successSuggest(suggestions));
}

export default function* rootSaga() {
  yield* takeEvery(FETCH_SUGGESTS, fetchSuggests);
}
