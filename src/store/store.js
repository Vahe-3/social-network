import { configureStore } from "@reduxjs/toolkit";
import profileReducer from"./profileSlice"
import messagesReducer from "./messagesSlice"
import usersReducer from './usersSlice'
import authSlice from "./authSlice";
import newsSlice from "./newsSlice";




const store = configureStore({
    reducer:{
        profile:profileReducer,
        messages:messagesReducer,
        users:usersReducer,
        auth:authSlice,
        news:newsSlice,
    }
})

window.store = store


export default store;


