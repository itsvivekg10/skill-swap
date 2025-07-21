import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/AuthSlice";
import profileReducer from "../slice/profileSlice"; // ✅ Import your profile slice

export const store = configureStore({
  reducer: {
    auth: authReducer,        // for auth state
    profile: profileReducer,  // for profile data
  },
});
