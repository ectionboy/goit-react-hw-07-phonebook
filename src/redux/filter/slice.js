import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    filterSet(state, action) {
      state.filter = action.payload;
    },
  },
});

export const getFilter = state => state.filters.filters;

export const { filterSet } = filterSlice.actions;

export const filtersReducer = filterSlice.reducer;