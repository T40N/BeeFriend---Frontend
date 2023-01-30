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
