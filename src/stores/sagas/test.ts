import { PayloadAction } from '@reduxjs/toolkit';
import { testActions } from '@stores/slices/test';
import { put, takeLatest } from 'redux-saga/effects';

const handleAddTest = function* ({ payload }: PayloadAction<string>) {
  try {
    yield put(testActions.addTest(payload));
  } catch {}
};

export default function* test() {
  yield takeLatest(testActions.addTest.type, handleAddTest);
}
