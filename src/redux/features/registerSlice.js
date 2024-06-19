import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axiosInstance";

export const registerAction = createAsyncThunk(
  "register/registerAction",
  async ({ values }) => {
    const authData = `${values.username}:${values.password}:${values.password}:${values.mobile}:${values.userTypeId}`;

    const authToken = btoa(authData);
    const data = JSON.stringify({
      username: values.username,
      Password: values.password,
      Email: values.email,
      Mobile: values.mobile,
      UserTypeId: values.userTypeId,
    });

    try {
      const response = await axiosInstance.post("/api/users/create", data, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      console.log({ response });
      return response.data;
    } catch (error) {
      console.log("catch error", { error });
    }
  }
);

// google registeration
export const googleRegisterAction = createAsyncThunk(
  "register/googleRegisterAction",
  async ({ token, email }) => {
    try {
      const response = await axiosInstance.post("/api/users/create", {
        token,
        email,
      });

      console.log({ response });
      return response.data;
    } catch (error) {
      console.log("catch error", { error });
      throw error; // ensure error is propagated
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState: {
    isLoading: false,
    errorMsg: null,
    userData: {},
    messageCode: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAction.pending, (state) => {
        state.isLoading = true;
        state.errorMsg = null;
      })
      .addCase(registerAction.fulfilled, (state, action) => {
        console.log({ action });
        state.isLoading = false;
        state.userData = action.payload.messageData;
        state.messageCode = action.payload.messageCode;

        state.errorMsg = null;
      })
      .addCase(registerAction.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMsg = action.payload;
        console.log({ action });
      })
      .addCase(googleRegisterAction.pending, (state) => {
        state.isLoading = true;
        state.errorMsg = null;
      })
      .addCase(googleRegisterAction.fulfilled, (state, action) => {
        console.log({ action });
        state.isLoading = false;
        state.userData = action.payload.messageData;
        state.messageCode = action.payload.messageCode;
        state.errorMsg = null;
      })
      .addCase(googleRegisterAction.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMsg = action.error.message;
        console.log({ action });
      });
  },
});

export default registerSlice.reducer;
