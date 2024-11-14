import { configureStore } from "@reduxjs/toolkit";
import {addTodoReducer, loginReducer, registerReducer } from "./Reducer";

const store=configureStore({
    reducer:{
        register:registerReducer,
        login:loginReducer,
        addTodo:addTodoReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export default store