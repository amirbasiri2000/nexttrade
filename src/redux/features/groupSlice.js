import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createGroupAction = createAsyncThunk(
  "group/createGroupAction",
  async ({ axiosPrivate, data, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.post("/api/addcommunitygroup", data);

      console.log({ response });
      if (response.data.messageCode === 200) {
        toast.success("Group created successfully");
        let title = response?.data?.messageData?.title
          .replace(/\s+/g, "-")
          .toLowerCase();
        // /traders-community/groups/amirbasiri
        navigate(`/traders-community/groups/${title}`);
      }
      return response.data;
    } catch (error) {
      console.log("creat group error", error);
      if (error?.message) {
        toast.error(error.message);
      }
      rejectWithValue(error);
    }
  }
);

export const getAllGroups = createAsyncThunk(
  "group/getAllGroups",
  async ({ axiosPrivate, toast }, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.post("/api/getcommunitygroups", {
        owneruserid: null,
      });

      console.log({ response });

      return response.data;
    } catch (error) {
      console.log("all groups error", error);
      if (error?.message) {
        toast.error(error.message);
      }
      rejectWithValue(error);
    }
  }
);

export const getUserGroups = createAsyncThunk(
  "group/getUserGroups",
  async ({ axiosPrivate, toast }, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.post("/api/getusercommunitygroups", {
        categoryid: 1,
      });

      console.log({ response });

      return response.data;
    } catch (error) {
      console.log("uer groups error", error);
      if (error?.message) {
        toast.error(error.message);
      }
      rejectWithValue(error);
    }
  }
);

const groupSlice = createSlice({
  name: "group",
  initialState: {
    isLoading: false,
    errorMsg: null,
    groupData: {},
    allGroups: [],
    userGroups:[],
    createGroupStatus: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createGroupAction.pending, (state) => {
        state.isLoading = true;
        state.errorMsg = null;
      })
      .addCase(createGroupAction.fulfilled, (state, action) => {
        console.log({ action });
        state.isLoading = false;
        state.errorMsg = null;
        state.groupData = action.payload.messageData;
        state.createGroupStatus = action.payload.messageCode;
      })
      .addCase(createGroupAction.rejected, (state, action) => {
        console.log({ action });
        state.isLoading = false;
        state.errorMsg = action.payload;
      })

      .addCase(getAllGroups.pending, (state) => {
        state.isLoading = true;
        state.errorMsg = null;
      })
      .addCase(getAllGroups.fulfilled, (state, action) => {
        console.log({ action });
        state.isLoading = false;
        state.errorMsg = null;
        state.allGroups = action.payload.messageData;
        state.createGroupStatus = action.payload.messageCode;
      })
      .addCase(getAllGroups.rejected, (state, action) => {
        console.log({ action });
        state.isLoading = false;
        state.errorMsg = action.payload;
      })

      .addCase(getUserGroups.pending, (state) => {
        state.isLoading = true;
        state.errorMsg = null;
      })
      .addCase(getUserGroups.fulfilled, (state, action) => {
        console.log({ action });
        state.isLoading = false;
        state.errorMsg = null;
        state.userGroups = action.payload.messageData;
        state.createGroupStatus = action.payload.messageCode;
      })
      .addCase(getUserGroups.rejected, (state, action) => {
        console.log({ action });
        state.isLoading = false;
        state.errorMsg = action.payload;
      });
  },
});

export default groupSlice.reducer;
