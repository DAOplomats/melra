import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: {
    hasDelegated: false,
    balance: false,
    isLoading: false,
  },

  reducers: {
    setHasDelegated: (state, action) => {
      state.hasDelegated = action.payload;
    },
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setHasDelegated, setBalance, setIsLoading } = userSlice.actions;

export default userSlice.reducer;
