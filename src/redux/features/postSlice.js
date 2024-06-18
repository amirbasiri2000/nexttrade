import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createGroupPost = createAsyncThunk(
  "post/createGroupPost",
  async ({ axiosPrivate, data, toast, resetForm }, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.post("/api/createforummessage", data);

      console.log({ response });
      if (response?.status === 200) {
        toast.success("Post created successfully.");
        resetForm();
      }
      return response.data;
    } catch (error) {
      console.log("userlist error", error);
      rejectWithValue(error);
    }
  }
);

export const createPostComment = createAsyncThunk(
  "post/createPostComment",
  async ({ axiosPrivate, data, toast, resetForm }, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.post("/api/createforummessage", data);

      console.log({ response });
      if (response?.status === 200) {
        toast.success("Post created successfully.");
        resetForm();
      }
      return response.data;
    } catch (error) {
      console.log("userlist error", error);
      rejectWithValue(error);
    }
  }
);

export const getGroupPosts = createAsyncThunk(
  "post/getGroupPosts",
  async ({ axiosPrivate, data }, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.post("/api/getforummessage", data);

      console.log({ response });
      return response.data;
    } catch (error) {
      console.log("userlist error", error);
      rejectWithValue(error);
    }
  }
);

export const getPostComments = createAsyncThunk(
  "post/getPostComments",
  async ({ axiosPrivate, data }, { rejectWithValue }) => {
    console.log({ data });
    try {
      const response = await axiosPrivate.post("/api/getforummessage", data);
      return { parentId: data.parentId, comments: response.data.messageData };
      // console.log("getcomments", { response });
      // return response.data;
    } catch (error) {
      console.log("userlist error", error);
      rejectWithValue(error);
    }
  }
);

const groupPostSlice = createSlice({
  name: "post",
  initialState: {
    isLoading: false,
    errorMsg: null,
    creatPostLoading: false,
    postCommentsLoading: false,
    post: {},
    posts: [],
    postComment: {},
    commentsByPostId: {},
    postComments: [],
    commentLoading: false,
    commentError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGroupPosts.pending, (state) => {
        state.isLoading = true;
        state.errorMsg = null;
      })
      .addCase(getGroupPosts.fulfilled, (state, action) => {
        console.log({ action });
        state.isLoading = false;
        state.posts = action?.payload?.messageData;
        state.errorMsg = null;
      })
      .addCase(getGroupPosts.rejected, (state, action) => {
        console.log({ action });
        state.isLoading = false;
        state.errorMsg = action.payload;
      })
      // ///////////////////////
      .addCase(createGroupPost.pending, (state) => {
        state.creatPostLoading = true;
        state.errorMsg = null;
      })
      .addCase(createGroupPost.fulfilled, (state, action) => {
        console.log({ action });
        state.creatPostLoading = false;
        state.posts.unshift(action.payload.messageData);
        state.errorMsg = null;
      })
      .addCase(createGroupPost.rejected, (state, action) => {
        console.log({ action });
        state.creatPostLoading = false;
        state.errorMsg = action.payload;
      })
      // -----------------------------------
      .addCase(createPostComment.pending, (state) => {
        state.commentLoading = true;
        state.commentError = null;
      })
      .addCase(createPostComment.fulfilled, (state, action) => {
        console.log({ action });
        state.commentLoading = false;
        const newComment = action.payload.messageData;
        state.postComments.unshift(newComment);
        state.commentError = null;
      })
      .addCase(createPostComment.rejected, (state, action) => {
        console.log({ action });
        state.commentLoading = false;
        state.commentError = action.payload;
      })

      // f2b9bf82-d4a6-4732-861e-0c62cd27eb19 COMUID
      // fafccc89-b1d2-4d2f-b7db-f984ae1a0a62 PARENT ID

      // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

      .addCase(getPostComments.pending, (state) => {
        state.postCommentsLoading = true;
        state.errorMsg = null;
      })
      .addCase(getPostComments.fulfilled, (state, action) => {
        state.postCommentsLoading = false;
        const { parentId, comments } = action.payload;
        state.commentsByPostId[parentId] = comments;
        state.errorMsg = null;
      })
      .addCase(getPostComments.rejected, (state, action) => {
        console.log({ action });
        state.postCommentsLoading = false;
        state.errorMsg = action.payload;
      });
  },
});

export default groupPostSlice.reducer;
