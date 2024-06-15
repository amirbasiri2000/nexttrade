import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createSignalChannleAction = createAsyncThunk(
  "signalChannel/createSignalChannleAction",
  async ({ axiosPrivate, data, toast, navigate, id }, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.post(
        "/api/signal/addsignalchannel",
        data
      );

      console.log({ response });
      console.log(id);
      if (response?.status === 200) {
        toast.success("Signal channel is created successfully");
        navigate(`/traders-community/groups/${id}`);
      }

      return response.data;
    } catch (error) {
      console.log("create signal channel error", error);
      if (error?.message) {
        toast.error(error.message);
      }
      rejectWithValue(error);
    }
  }
);

export const getGroupSignalChannels = createAsyncThunk(
  "signalChannel/getGroupSignalChannels",
  async ({ axiosPrivate, data, toast }, { rejectWithValue }) => {
    console.log(data)
    try {
      const response = await axiosPrivate.post(
        "/api/signal/getsignalchannel",
        data
      );

      console.log({ response });

      return response.data;
    } catch (error) {
      console.log("getsignalchannels error", error);
      if (error?.message) {
        toast.error(error.message);
      }
      rejectWithValue(error);
    }
  }
);

const signalChannelsSlice = createSlice({
  name: "signalChannel",
  initialState: {
    isLoading: false,
    errorMsg: null,
    signalChannels: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(createSignalChannleAction.pending, (state) => {
        state.isLoading = true;
        state.errorMsg = null;
      })
      .addCase(createSignalChannleAction.fulfilled, (state, action) => {
        console.log({ action });
        state.isLoading = false;
        state.errorMsg = null;
        state.allGroups = action.payload;
      })
      .addCase(createSignalChannleAction.rejected, (state, action) => {
        console.log({ action });
        state.isLoading = false;
        state.errorMsg = action.payload;
      })

      // ****************************
      .addCase(getGroupSignalChannels.pending, (state) => {
        state.isLoading = true;
        state.errorMsg = null;
      })
      .addCase(getGroupSignalChannels.fulfilled, (state, action) => {
        console.log({ action });
        state.isLoading = false;
        state.errorMsg = null;
        state.signalChannels = action.payload?.messageData;
      })
      .addCase(getGroupSignalChannels.rejected, (state, action) => {
        console.log({ action });
        state.isLoading = false;
        state.errorMsg = action.payload;
      });
  },
});

export default signalChannelsSlice.reducer;
