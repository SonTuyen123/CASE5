import {createSlice} from "@reduxjs/toolkit";

const listMussicSlice = createSlice({
  name: "listMussic",
  initialState: {
    data: [],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const {setData} = listMussicSlice.actions;
export default listMussicSlice.reducer;
