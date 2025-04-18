import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: {
    melraAddress: null,
    vp: null,
    delegators: null,
    recentDelegators: null,
    isInitializing: true,
    delegatorsCount: null,
    recentDelegations: null,
    recentActivities: null,
    recentProposals: null,
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
    setDelegatorsCount: (state, action) => {
      state.delegatorsCount = action.payload;
    },
    setRecentDelegations: (state, action) => {
      state.recentDelegations = action.payload;
    },
    setRecentActivities: (state, action) => {
      state.recentActivities = action.payload;
    },
    setRecentProposals: (state, action) => {
      state.recentProposals = action.payload;
    },
  },
});

export const {
  setMelraAddress,
  setVp,
  setDelegators,
  setRecentDelegators,
  setIsInitializing,
  setDelegatorsCount,
  setRecentDelegations,
  setRecentActivities,
  setRecentProposals,
} = userSlice.actions;

export default userSlice.reducer;
