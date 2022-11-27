import { createSlice } from '@reduxjs/toolkit';

const FilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    change(_, action) {
      return action.payload;
    },
  },
});

export const { change } = FilterSlice.actions;
export const filterReducer = FilterSlice.reducer;
