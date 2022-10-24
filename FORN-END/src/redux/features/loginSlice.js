import {createSlice} from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    name: "",
  },
  reducers: {
    setName: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const {setName} = loginSlice.actions;
export default loginSlice.reducer;
