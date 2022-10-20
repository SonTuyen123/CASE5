import { createSlice } from "@reduxjs/toolkit";

const verifySlice = createSlice({
  name: "verify",
  initialState: {
    data: {},
  },
  reducers: {
    verifyRegister: (state, action) => {
      // console.log(action.payload);
      state.data = action.payload;
    },
  },
});
export const { verifyRegister } = verifySlice.actions;
export default verifySlice.reducer;
