import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./features/loginSlice";
import registerReducer from "./features/registerSlice";
import usersListReducer from "./features/admin/usersListSlice";
import userDataReducer from "./features/userDataSlice";
import userSendMessage from "./features/messages/sendMsgSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    auth: registerReducer,
    usersList: usersListReducer,
    user: userDataReducer,
    userSendMessage: userSendMessage,
  },
});

export default store;
