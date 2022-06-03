import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
   name: "users",
   initialState: {
      users: [],
   },
   reducers: {
      signInUser(state, action) {
        return [...state, action.payload]
      },
   },
});

export const { signInUser } = usersSlice.actions;

export default usersSlice.reducer;
