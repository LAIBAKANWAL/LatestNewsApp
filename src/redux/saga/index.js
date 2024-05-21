import { all, fork } from 'redux-saga/effects';
import newsSaga from './newssaga';

export default function* rootSaga() {
  yield all([fork(newsSaga)]);
}
