import { configureStore } from "@reduxjs/toolkit";
import {registerReducer } from "./Reducer";

const store=configureStore({
    reducer:{
        register:registerReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export default store