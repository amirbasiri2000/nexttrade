import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosInstance } from "../../axios/axiosInstance";

export const loginAction = createAsyncThunk(
  "login/loginAction",
  async ({ values, toast }, { rejectWithValue }) => {
    const authData = `${values.username}:${values.password}`;
    const authToken = btoa(authData);

    const data = JSON.stringify({
      username: values.username,
      password: values.password,
    });

    // const config = {
    //   method: "post",
    //   maxBodyLength: Infinity,
    //   url: "http://178.239.151.7:8095/api/gettoken",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     Authorization: `Basic ${authToken}`,
    //   },
    //   data: data,
    // };

    try {
      // const response = await axios.request(config);
      // console.log(response);
      // return response.data;

      const response = await axiosInstance.post("/api/gettoken", data, {
        headers: {
          Authorization: `Basic ${authToken}`,
        },
      });

      console.log({ response });
      return response.data;
    } catch (error) {
      console.log("login error", error);
      if (error?.response?.status === 400) {
        toast.error("Username or Password is incurrect!.");
      } else if (error?.message) {
        toast.error(error.message);
      }
      rejectWithValue(error);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoading: false,
    errorMsg: null,
    userData: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.isLoading = true;
        state.errorMsg = null;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        console.log({ action });
        state.isLoading = false;
        state.userData = action.payload;
      })
      .addCase(loginAction.rejected, (state, action) => {
        console.log({ action });
        state.isLoading = false;
        state.errorMsg = action.payload;
      });
  },
});

export default loginSlice.reducer;
