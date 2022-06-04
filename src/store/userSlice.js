import { createSlice } from "@reduxjs/toolkit";
import Toastmessage from "../components/ToastMessage";
const usersSlice = createSlice({
   name: "users",
   initialState: { users: [] },
   reducers: {
      signInUser(state, action) {
         Toastmessage("(:ثبت نام با موفقیت انجام شد ")

         return { ...state, users: [...state.users, action.payload] };
      },
   },
});

export const { signInUser } = usersSlice.actions;

export default usersSlice.reducer;
