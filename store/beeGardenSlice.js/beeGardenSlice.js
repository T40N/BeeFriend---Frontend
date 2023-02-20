import { createSlice } from "@reduxjs/toolkit";
import {
  addData,
  deleteNote,
  getBeeGarden,
  postBeeHave,
} from "./beeGardenActions";

const initialState = {
  beeHaves: [],
  activeBeeHave: {},
};

const beeGardenSlice = createSlice({
  name: "beeGarden",
  initialState,
  reducers: {
    getBeeHaveById: (state, action) => {
      state.beeHaves.forEach((beeHave) => {
        if (beeHave._id === action.payload) {
          console.log(beeHave);
          state.activeBeeHave = beeHave;
          console.log("activeBeeHave", beeHave);
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBeeGarden.fulfilled, (state, action) => {
      state.beeHaves = action.payload.data.beeHaves;
    });
    builder.addCase(postBeeHave.fulfilled, (state, action) => {
      state.beeHaves.push(action.payload.data);
    });
    builder.addCase(addData.fulfilled, (state, { payload }) => {
      state.beeHaves = state.beeHaves.map((beeHave) => {
        if (beeHave._id === payload.data._id) {
          return payload.data;
        }
        return beeHave;
      });
      state.activeBeeHave = payload.data;
      console.log("activeBeeHave", payload.data);
    });
  },
});

export const { getBeeHaveById } = beeGardenSlice.actions;
export default beeGardenSlice;
