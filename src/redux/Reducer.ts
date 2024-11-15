import  registerReducer from '../redux/slices/Register.Slice';
import loginReducer from "../redux/slices/LogIn.Slice";
import addTodoReducer from "../redux/slices/AddTodo.Slice";
import fetchTodoReducer from "../redux/slices/FetchTodo.Slice";
import editTodoReducer from "../redux/slices/EditTodo.Slice";
import deleteTodoReducer from "../redux/slices/DeleteTodo.Slice";
import completeTodoReducer from "../redux/slices/CompleteTodo.Slice"
export {registerReducer,
    loginReducer,
    addTodoReducer,
    fetchTodoReducer,
    editTodoReducer,
    deleteTodoReducer,
    completeTodoReducer
}