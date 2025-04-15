import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: {
    melraAddress: null,
    vp: null,
    delegators: null,
    recentDelegators: null,
    isInitializing: true,
  },

  reducers: {
    setMelraAddress: (state, action) => {
      state.melraAddress = action.payload;
    },
    setVp: (state, action) => {
      state.vp = action.payload;
    },
    setDelegators: (state, action) => {
      state.delegators = action.payload;
    },
    setRecentDelegators: (state, action) => {
      state.recentDelegators = action.payload;
    },
    setIsInitializing: (state, action) => {
      state.isInitializing = action.payload;
    },
  },
});

export const {
  setMelraAddress,
  setVp,
  setDelegators,
  setRecentDelegators,
  setIsInitializing,
} = userSlice.actions;

export default userSlice.reducer;
