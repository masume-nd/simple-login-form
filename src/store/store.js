import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./userSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

// const reducers = combineReducers({
//    users: usersReducer,
// });
// const persistConfig = {
//    key: "root",
//    storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducers);


const loadPreloadState = () => {
   try {
      const serializedState = localStorage.getItem("users");
      if (serializedState === null) {
         return undefined;
      }
      return JSON.parse(serializedState);
   } catch (err) {
      return undefined;
   }
};
const saveState = (state) => {
   try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("users", serializedState);
   } catch {
      // ignore write errors
   }
};

const store = configureStore({
   devTools: true,
   // reducer: persistedReducer,
   preloadedState: loadPreloadState(),
   reducer: {
      users: usersReducer,
   },
});

store.subscribe(() => {
   saveState({
      users: store.getState().users,
   });
});
export default store;