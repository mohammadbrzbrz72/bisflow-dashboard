import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "./features/user-slice";

const rootReducer = combineReducers({
  basket: userSlice.reducer,
});

export default rootReducer;
