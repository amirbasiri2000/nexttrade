import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./features/loginSlice";
import registerReducer from "./features/registerSlice";
import usersListReducer from "./features/admin/usersListSlice";
import userDataReducer from "./features/userDataSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    auth: registerReducer,
    usersList: usersListReducer,
    user: userDataReducer,
  },
});

export default store;
