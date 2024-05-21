import { combineReducers } from '@reduxjs/toolkit';
import newsReducer from './news_reducer';

const rootReducer = combineReducers({
  news: newsReducer,
});

export default rootReducer;
