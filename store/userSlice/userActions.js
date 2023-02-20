import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AsyncStorage } from "react-native";
import apiConstants from "../../constants/apiConstants";

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    console.log(password);
    try {
      const response = await axios({
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        method: "POST",
        url: apiConstants.user.login,
        data: {
          email,
          password,
        },
      });

      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

export const register = createAsyncThunk("user/register", async (user) => {
  try {
    const response = await axios({
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      method: "POST",
      url: apiConstants.user.register,
      data: user,
    });

    return response.data;
  } catch (err) {
    if (err.response.data.data[0].msg) {
      throw err.response.data.data[0].msg;
    }
    console.log(err.response);
    throw err;
  }
});

export const changePassword = createAsyncThunk(
  "user/changePassword",
  async (passwords, { getState }) => {
    const { user } = getState();

    try {
      const response = await axios({
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          Authorization: `Bearer ${user.token}`,
        },
        method: "PUT",
        url: apiConstants.user.changePassword,
        data: passwords,
      });

      return response.data;
    } catch (err) {
      if (err.response.data.data[0].msg) {
        throw err.response.data.data[0].msg;
      }
      console.log(err.response);
      throw err;
    }
  }
);

export const changeEmail = createAsyncThunk(
  "user/changeEmail",
  async (emails, { getState }) => {
    const { user } = getState();

    try {
      await axios({
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          Authorization: `Bearer ${user.token}`,
        },
        method: "PUT",
        url: apiConstants.user.changeEmail,
        data: emails,
      });

      return emails.newEmail;
    } catch (err) {
      if (err.response.data.data[0].msg) {
        throw err.response.data.data[0].msg;
      }
      console.log(err.response);
      throw err;
    }
  }
);

export const addEvent = createAsyncThunk(
  "user/addEvent",
  async ({ date, name, opis }, { getState }) => {
    const { user } = getState();

    try {
      const response = await axios({
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          Authorization: `Bearer ${user.token}`,
        },
        method: "POST",
        url: apiConstants.user.addEvent,
        data: {
          date,
          name,
          opis,
        },
      });
      return response.data;
    } catch (err) {
      if (err.response.data.data[0].msg) {
        throw err.response.data.data[0].msg;
      }
      console.log(err.response);
      throw err;
    }
  }
);

export const getCalendar = createAsyncThunk(
  "user/getCalendar",
  async (_, { getState }) => {
    const { user } = getState();

    try {
      const response = await axios({
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          Authorization: `Bearer ${user.token}`,
        },
        method: "GET",
        url: apiConstants.user.getCalendar,
      });
      return response.data;
    } catch (err) {
      if (err.response.data.data[0].msg) {
        throw err.response.data.data[0].msg;
      }
      console.log(err.response);
      throw err;
    }
  }
);
