import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addSignalAction = createAsyncThunk(
  "signal/addSignalAction",
  async ({ axiosPrivate, data, toast, navigate, id }, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.post("/api/signal/addsignal", data);

      console.log({ response });
      // if (response?.status === 200) {
      //   toast.success("Signal is created successfully");
      //   // navigate(`/traders-community/groups/${id}`);
      // }

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

export const getSignals = createAsyncThunk(
  "signal/getSignals",
  async ({ axiosPrivate, data }, { rejectWithValue }) => {
    try {
      console.log(data);

      const response = await axiosPrivate.post(
        "/api/signal/getsignal",
        JSON.stringify(data)
      );

      console.log("signals", { response });

      return response.data;
    } catch (error) {
      console.log("getsignals error", error);
      if (error?.message) {
        toast.error(error?.message);
      }
      rejectWithValue(error);
    }
  }
);

export const getAnalysisType = createAsyncThunk(
  "signal/getAnalysisType",
  async ({ axiosPrivate, toast }, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.post("/api/getanalysistype");

      console.log("analysis type", { response });

      return response.data;
    } catch (error) {
      console.log("getAnalysisType error", error);
      if (error?.message) {
        toast.error(error?.message);
      }
      rejectWithValue(error);
    }
  }
);

export const getPositionType = createAsyncThunk(
  "signal/getPositionType",
  async ({ axiosPrivate, toast }, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.post("/api/getpositiontype");

      console.log("position type", { response });

      return response.data;
    } catch (error) {
      console.log("getPositionType error", error);
      if (error?.message) {
        toast.error(error?.message);
      }
      rejectWithValue(error);
    }
  }
);

export const getMarketCycle = createAsyncThunk(
  "signal/getMarketCycle",
  async ({ axiosPrivate, toast }, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.post("/api/getmarketcycle");

      console.log("market cycle", { response });

      return response.data;
    } catch (error) {
      console.log("getMrketCycle error", error);
      if (error?.message) {
        toast.error(error?.message);
      }
      rejectWithValue(error);
    }
  }
);

export const getInstrument = createAsyncThunk(
  "signal/getInstrument",
  async ({ axiosPrivate, toast }, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.post("/api/getinstrument");

      console.log("instruments", { response });

      return response.data;
    } catch (error) {
      console.log("getinstrument error", error);
      if (error?.message) {
        toast.error(error?.message);
      }
      rejectWithValue(error);
    }
  }
);

export const getEntryPoint = createAsyncThunk(
  "signal/getEntryPoint",
  async ({ axiosPrivate, toast }, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.post("/api/getentrypoint");

      console.log("entry point", { response });

      return response.data;
    } catch (error) {
      console.log("getentrypoint error", error);
      if (error?.message) {
        toast.error(error?.message);
      }
      rejectWithValue(error);
    }
  }
);

export const postSignalImage = createAsyncThunk(
  "signal/getEntryPoint",
  async ({ axiosPrivate, IFormFile, toast }, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.post(
        "/api/signal/uploadsignalimage",
        IFormFile
      );

      console.log("upload signal file", { response });

      return response.data;
    } catch (error) {
      console.log("postsignalImgae error", error);
      if (error?.message) {
        toast.error(error?.message);
      }
      rejectWithValue(error);
    }
  }
);

// export const postSignalImage = createAsyncThunk(
//   "signal/postSignalImage",
//   async ({ axiosPrivate, IFormFile, Id, signalFile, toast }) => {

//     console.log({ Id });
//     console.log({ signalFile });
//     try {
//       let data = new FormData();
//        // Assuming Id is a string received from the previous API call
//       data.append("IFormFile", signalFile);
//       // Replace with actual API call
//       console.log({ data });
//       let config = {
//         method: "post",
//         maxBodyLength: Infinity,
//         url: "https://api.yasakashi.ir/api/signal/uploadsignalimage",
//         headers: {
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ5YXNhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6IjEiLCJqdGkiOiI4NjFhNjBhMC1hZTM0LTQyMGItYTNhYS0wMWQ4MmIwMzE3ZDQiLCJ1aWQiOiI1Yzc5ZDAwZC05MGZhLTQ3MGYtZDc2Mi0wOGRjN2NiNzZiNjciLCJleHAiOjE3MzIxOTI2NDAsImlzcyI6Ik1pdHJhIiwiYXVkIjoiTmV4dFRyYWRlQVBJcyJ9.QOzJJZsWOwMnrhgmmjOMU0ZkdN0JC3HHyUcUea5s5sM",
//         },
//         data: data,
//       };
//       console.log({ data });
//       const response = await axios.request(config);
//       //   await axios.post(
//       //   "/api/signal/uploadsignalimage",
//       //   formData,
//       //   config
//       // );

//       console.log("postsignalImage", { response });
//       return response.data; // Assuming response contains relevant data
//     } catch (error) {
//       console.error("Error uploading signal image", error);
//       throw new Error(error.message); // Throw error to be caught in component
//     }
//   }
// );

const signalSlice = createSlice({
  name: "signal",
  initialState: {
    isLoading: false,
    errorMsg: null,
    signalChannels: [],
    analysisTypes: [],
    positionTypes: [],
    marketCycles: [],
    instruments: [],
    entryPoints: [],
    signalChannelId: "",
    signalsLoading: false,
    signals: [],
  },
  reducers: {
    setSignalChannelId: (state, action) => {
      state.signalChannelId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(addSignalAction.pending, (state) => {
        state.isLoading = true;
        state.errorMsg = null;
      })
      .addCase(addSignalAction.fulfilled, (state, action) => {
        // console.log({ action });
        state.isLoading = false;
        state.errorMsg = null;
      })
      .addCase(addSignalAction.rejected, (state, action) => {
        console.log({ action });
        state.isLoading = false;
        state.errorMsg = action.payload;
      })

      .addCase(getAnalysisType.pending, (state, action) => {
        state.isLoading = true;
        state.errorMsg = null;
      })
      .addCase(getAnalysisType.fulfilled, (state, action) => {
        state.isLoading = false;
        // console.log({ action });
        state.analysisTypes = action.payload?.messageData;
      })
      .addCase(getAnalysisType.rejected, (state, action) => {
        state.isLoading = false;
        console.log({ action });
      })
      // ****************************************************

      .addCase(getPositionType.pending, (state, action) => {
        state.isLoading = true;
        state.errorMsg = null;
      })
      .addCase(getPositionType.fulfilled, (state, action) => {
        state.isLoading = false;
        // console.log({ action });
        state.positionTypes = action.payload?.messageData;
      })
      .addCase(getPositionType.rejected, (state, action) => {
        state.isLoading = false;
        console.log({ action });
      })
      // **************************************************************
      .addCase(getMarketCycle.pending, (state, action) => {
        state.isLoading = true;
        state.errorMsg = null;
      })
      .addCase(getMarketCycle.fulfilled, (state, action) => {
        state.isLoading = false;
        // console.log({ action });
        state.marketCycles = action.payload?.messageData;
      })
      .addCase(getMarketCycle.rejected, (state, action) => {
        state.isLoading = false;
        console.log({ action });
      })
      // **************************************************************
      .addCase(getInstrument.pending, (state, action) => {
        state.isLoading = true;
        state.errorMsg = null;
      })
      .addCase(getInstrument.fulfilled, (state, action) => {
        state.isLoading = false;
        // console.log({ action });
        state.instruments = action.payload?.messageData;
      })
      .addCase(getInstrument.rejected, (state, action) => {
        state.isLoading = false;
        console.log({ action });
      })
      // **************************************************************
      .addCase(getEntryPoint.pending, (state, action) => {
        state.isLoading = true;
        state.errorMsg = null;
      })
      .addCase(getEntryPoint.fulfilled, (state, action) => {
        state.isLoading = false;
        // console.log({ action });
        state.entryPoints = action.payload?.messageData;
      })
      .addCase(getEntryPoint.rejected, (state, action) => {
        state.isLoading = false;
        console.log({ action });
      })

      // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^6666
      .addCase(getSignals.pending, (state, action) => {
        state.isLoading = true;
        state.errorMsg = null;
      })
      .addCase(getSignals.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log({ action });
        state.signals = action.payload?.messageData;
      })
      .addCase(getSignals.rejected, (state, action) => {
        state.isLoading = false;
        console.log({ action });
      });
  },
});

export const { setSignalChannelId } = signalSlice.actions;
export default signalSlice.reducer;
