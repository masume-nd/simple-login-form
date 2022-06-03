import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./userSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
   users: usersReducer,
});
const persistConfig = {
   key: "root",
   storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
   devTools: true,
   reducer: persistedReducer,
});
export default store;
