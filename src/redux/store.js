import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./features/loginSlice";
import registerReducer from "./features/registerSlice";
import usersListReducer from "./features/admin/usersListSlice";
import userDataReducer from "./features/userDataSlice";
import userSendMessage from "./features/messages/sendMsgSlice";
import groupReducer from "./features/groupSlice";
import signalChannelReducer from "./features/signals/signalChannelsSlice";
import addSignalReducer from "./features/signals/SignalSlice";
import groupPostsReducer from "./features/postSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    auth: registerReducer,
    usersList: usersListReducer,
    user: userDataReducer,
    userSendMessage: userSendMessage,
    group: groupReducer,
    signalChannel: signalChannelReducer,
    addSignal: addSignalReducer,
    posts: groupPostsReducer,
  },
});

export default store;
