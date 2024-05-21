import { call, put, takeLatest, fork } from 'redux-saga/effects';
import axios from 'axios';
import { fetchNewsRequest, fetchNewsSuccess, fetchNewsFailure } from '../reducer/news_reducer';

function* fetchNews() {
  try {
    const response = yield call(axios.get, 'https://newsapi.org/v2/top-headlines?country=us&apiKey=83872de54dce4fcaa2102b9d8ac157c5');
    yield put(fetchNewsSuccess(response.data.articles));
  } catch (error) {
    yield put(fetchNewsFailure(error.message));
  }
}

function* watchFetchNews() {
  yield takeLatest(fetchNewsRequest.type, fetchNews);
}

export default function* newsSaga() {
  yield fork(watchFetchNews);
}
