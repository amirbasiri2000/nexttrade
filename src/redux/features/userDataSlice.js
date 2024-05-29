import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const userDataAction = createAsyncThunk(
  "user/userDataAction",
  async ({ axiosPrivate }, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.post("/api/checktoken");

      console.log({ response });
      return response.data;
    } catch (error) {
      console.log("login error", error);
      rejectWithValue(error);
    }
  }
);

const CheckUserSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    errorMsg: null,
    userData: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userDataAction.pending, (state) => {
        state.isLoading = true;
        state.errorMsg = null;
      })
      .addCase(userDataAction.fulfilled, (state, action) => {
        console.log({ action });
        state.isLoading = false;
        state.userData = action.payload;
      })
      .addCase(userDataAction.rejected, (state, action) => {
        console.log({ action });
        state.isLoading = false;
        state.errorMsg = action.payload;
      });
  },
});

export default CheckUserSlice.reducer;
