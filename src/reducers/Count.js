import { createSlice } from "@reduxjs/toolkit";
export const countSlice = createSlice({
  name: "count",
  initialState: {
    count: 0,
  },
  reducers: {
    plusCounter: (state) => {
      state.count += 1;
    },
    minusCounter: (state) => {
      if (state.count != 0) {
        state.count -= 1;
      }
    },
  },
});

export const { plusCounter, minusCounter } = countSlice.actions;
export default countSlice.reducer;
