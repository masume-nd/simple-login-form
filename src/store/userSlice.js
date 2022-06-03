import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   users: [],
};
const usersSlice = createSlice({
   name: "users",
   initialState,
   reducers: {
      signInUser(state, action) {
         console.log(action.payload);
       console.log(state); 
       let isUser =  state.users?.find(item => item.userData.email == action.payload.userData.email)
       console.log(isUser);
            // if (item.id !== action.payload.id) {
               return [state, action.payload];
            
       
      },
   },
});

export const { signInUser } = usersSlice.actions;

export default usersSlice.reducer;
