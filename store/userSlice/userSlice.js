import { createSlice } from "@reduxjs/toolkit";
import { changeEmail, getCalendar, login, register } from "./userActions";

const initialState = {
  id: "",
  name: "",
  surname: "",
  email: "",
  status: "fullfiled",
  token: "",
  error: "",
  calendar: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => (state = initialState),
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.status = "fullfiled";
        state.email = action.payload.email;
        state.name = action.payload.name;
        state.surname = action.payload.surname;
        state.token = action.payload.token;
        state.id = action.payload.userId;
        state.error = "";
        state.calendar = action.payload.calendar;
      })
      .addCase(login.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(login.rejected, (state, action) => {
        // state.status = rejected;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.name = action.payload.name;
        state.surname = action.payload.surname;
        state.id = action.payload.userId;
        state.token = action.payload.userId;
        state.status = "fullfiled";
        state.error = "";
        state.calendar = action.payload.calendar;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(changeEmail.fulfilled, (state, { payload }) => {
        state.email = payload;
      })
      .addCase(getCalendar.fulfilled, (state, { payload }) => {
        // console.log(payload);
        state.calendar = payload.data;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice;
