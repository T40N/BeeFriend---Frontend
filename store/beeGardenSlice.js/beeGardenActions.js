import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiConstants from "../../constants/apiConstants";

export const getBeeGarden = createAsyncThunk(
  "beeGarden/getBeeGarden",
  async (args, { getState }) => {
    const { user } = getState();
    try {
      const response = await axios({
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          Authorization: `Bearer ${user.token}`,
        },
        method: "GET",
        url: apiConstants.beeGarden.getBeeGarden,
      });

      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

export const postBeeHave = createAsyncThunk(
  "beeGarden/postBeeHive",
  async (name, { getState }) => {
    const { user } = getState();
    console.log(name);
    try {
      const response = await axios({
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          Authorization: `Bearer ${user.token}`,
        },
        data: { name },
        method: "POST",
        url: apiConstants.beeGarden.postBeeHave,
      });
      console.log("created", response.data.data);
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

export const setBeeHavePosition = createAsyncThunk(
  "beeGarden/setBeeHavePosition",
  async ({ xPosition, yPosition, id }, { getState }) => {
    const { user } = getState();
    console.log("dispatch");

    try {
      const response = await axios({
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          Authorization: `Bearer ${user.token}`,
        },
        data: { xPosition, yPosition },
        method: "PUT",
        url: apiConstants.beeGarden.setBeeHavePosition + "/" + id,
      });
    } catch (err) {
      throw err;
    }
  }
);

export const deleteBeeHive = createAsyncThunk(
  "beeGarden/deleteBeeHive",
  async (id, { rejectWithValue, getState }) => {
    const { user } = getState();
    try {
      const response = await axios({
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          Authorization: `Bearer ${user.token}`,
        },
        method: "DELETE",
        url: apiConstants.beeGarden.deleteBeeHave + id,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const addData = createAsyncThunk(
  "beeGarden/addData",
  async (
    { beeHiveId, waxTaken, honeyTaken },
    { getState, rejectWithValue }
  ) => {
    console.log("dataadd");
    const { user } = getState();
    console.log(user);
    try {
      console.log("axiosinit");
      const response = await axios({
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          Authorization: `Bearer ${user.token}`,
        },
        data: { waxTaken, honeyTaken, date: new Date() },
        method: "PUT",
        url: apiConstants.beeGarden.addData + beeHiveId,
      });
      console.log(response);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const addNote = createAsyncThunk(
  "beeGarden/addNote",
  async ({ beeHaveId, title, content }, { getState }) => {
    const { user } = getState();
    console.log(beeHaveId);
    try {
      const response = await axios({
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          Authorization: `Bearer ${user.token}`,
        },
        data: { title, content },
        method: "POST",
        url: apiConstants.beeGarden.addNote + beeHaveId,
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteNote = createAsyncThunk(
  "beeGarden/deleteNote",
  async ({ noteId }, { getState }) => {
    const { user } = getState();

    try {
      const response = await axios({
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          Authorization: `Bearer ${user.token}`,
        },
        method: "DELETE",
        url: apiConstants.beeGarden.deleteNote + noteId,
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const editNote = createAsyncThunk(
  "beeGarden/editNote",
  async ({ noteId, title, content }, { getState }) => {
    const { user } = getState();

    try {
      const response = await axios({
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          Authorization: `Bearer ${user.token}`,
        },
        data: { title, content },
        method: "PUT",
        url: apiConstants.beeGarden.updateNote + noteId,
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
