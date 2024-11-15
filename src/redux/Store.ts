import { configureStore } from "@reduxjs/toolkit";
import {addTodoReducer, deleteTodoReducer, editTodoReducer, fetchTodoReducer, loginReducer, registerReducer } from "./Reducer";

const store=configureStore({
    reducer:{
        register:registerReducer,
        login:loginReducer,
        addTodo:addTodoReducer,
        fetchTodo:fetchTodoReducer,
        editTodo:editTodoReducer,
        deleteTodo:deleteTodoReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export default store