import { combineReducers } from '@reduxjs/toolkit';
import { testReducer } from '@stores/slices/test';

const rootReducer = combineReducers({
  test: testReducer,
});

export default rootReducer;
