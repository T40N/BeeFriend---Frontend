import { createAsyncThunk } from "@reduxjs/toolkit";
import apiConstants from "../../constants/apiConstants";
import axios from "axios";

export const addFodder = createAsyncThunk(
  "magazyn/addFodder",
  async (quantity, { getState }) => {
    const { user } = getState();

    try {
      const response = await axios({
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          Authorization: `Bearer ${user.token}`,
        },
        method: "POST",
        data: {
          quantity,
        },
        url: apiConstants.magazyn.addFodder,
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const substractFodder = createAsyncThunk(
  "magazyn/substractFodder",
  async (quantity, { getState }) => {
    const { user, magazyn } = getState();

    console.log(magazyn);
    try {
      const response = await axios({
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          Authorization: `Bearer ${user.token}`,
        },
        method: "DELETE",
        data: {
          quantity,
        },
        url: apiConstants.magazyn.substractFodder + magazyn.syropId,
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const addTools = createAsyncThunk(
  "magazyn/addTools",
  async ({ name, opis }, { getState }) => {
    const { user } = getState();

    try {
      const response = await axios({
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          Authorization: `Bearer ${user.token}`,
        },
        method: "POST",
        data: {
          name,
          opis,
        },
        url: apiConstants.magazyn.addTools,
      });

      console.log(response);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const substractTool = createAsyncThunk(
  "magazyn/substractTool",
  async ({ id }, { getState }) => {
    const { user } = getState();
    try {
      const response = await axios({
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          Authorization: `Bearer ${user.token}`,
        },
        method: "DELETE",
        url: apiConstants.magazyn.substractTool + id,
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getMagazyn = createAsyncThunk(
  "magazyn/getMagazyn",
  async (_, { getState }) => {
    const { user } = getState();
    console.log("getMagazyn", apiConstants.magazyn.getMagazyn);
    try {
      const response = await axios({
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          Authorization: `Bearer ${user.token}`,
        },
        method: "GET",
        url: apiConstants.magazyn.getMagazyn,
      });

      console.log(response);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
