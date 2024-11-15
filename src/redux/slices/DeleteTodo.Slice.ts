import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApiRequest } from "../../services/rootservice";
import { API_END_POINT } from "../../services/apiEndPoint";
import { TextConstant } from "../../constants/text";

export const DeleteTodoCall=createAsyncThunk('delete/todo',async(payload)=>{
    try {
        const response=await authApiRequest(`${API_END_POINT.DELETE_TODO}`,payload,TextConstant.POST);
        console.log("response in deletetodocall",response);
        return response;
    } catch (error) {
        console.log("error in delete todod call");
        return error;
    }
});

const initialState={
    loading:false,
    data:null,
    deleteSuccess:false
};

const deleteTodoSlice=createSlice({
    name:"DeleteTodo",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(DeleteTodoCall.pending,(state)=>{
            state.loading=false
            state.deleteSuccess=false
        }).addCase(DeleteTodoCall.fulfilled,(state,action)=>{
            console.log("delete todo fulfilled",action.payload.success);
            state.loading=false
            state.data=action.payload.data
            state.deleteSuccess=action.payload.success
        }).addCase(DeleteTodoCall.rejected,(state)=>{
            state.loading=false
            state.deleteSuccess=false
        })
    }
});

export default deleteTodoSlice.reducer;