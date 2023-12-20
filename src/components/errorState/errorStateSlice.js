import { createSlice } from "@reduxjs/toolkit";

const errorStateSlice = createSlice({
  name: 'errorState',
  initialState: false,
  reducers: {
    setErrorState: (state, action) => {
      return action.payload;
    },
  },
});

export const { setErrorState } = errorStateSlice.actions;
export default errorStateSlice.reducer;