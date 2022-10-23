import {createSlice} from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    url: "",
  },
  reducers: {
    getUrl: (state, action) => {
      state.url = action.payload;
    },
  },
});
export const {getUrl} = playerSlice.actions;
export default playerSlice.reducer;
