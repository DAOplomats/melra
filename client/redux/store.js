"use client";

import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slice/UserSlice.js";
import walletSlice from "./slice/walletSlice.js";

export const store = configureStore({
  reducer: {
    user: userSlice,
    wallet: walletSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
