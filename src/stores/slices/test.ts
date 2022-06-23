import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface testState {
  name: string;
}

const initialState: testState = {
  name: 'hello',
};

const addTest: CaseReducer<testState, PayloadAction<string>> = (state, { payload }) => {
  state.name = payload;
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: { addTest },
});

export const testReducer = testSlice.reducer;
export const testActions = testSlice.actions;
export const { caseReducers } = testSlice;
