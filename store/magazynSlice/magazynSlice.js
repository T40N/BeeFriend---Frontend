import { createSlice } from "@reduxjs/toolkit";
import { getMagazyn } from "./magazynActions";
const initialState = {
  syrop: 0,
  syropId: "",
  tools: [],
};

const magazynSlice = createSlice({
  name: "magazyn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMagazyn.fulfilled, (state, { payload }) => {
      console.log("payload getMagazyn", payload);

      if (payload.data.fodder.length > 0) {
        state.syrop = payload.data.fodder[0].quantity;
        state.syropId = payload.data.fodder[0]._id;
      }

      state.tools = payload.data.tools;
    });
  },
});

export const {} = magazynSlice.actions;
export default magazynSlice;
