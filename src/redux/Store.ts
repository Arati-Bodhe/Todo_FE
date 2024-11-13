import { configureStore } from "@reduxjs/toolkit";
import {loginReducer, registerReducer } from "./Reducer";

const store=configureStore({
    reducer:{
        register:registerReducer,
        login:loginReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export default store