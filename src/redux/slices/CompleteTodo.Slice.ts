import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApiRequest } from "../../services/rootservice";
import { API_END_POINT } from "../../services/apiEndPoint";
import { TextConstant } from "../../constants/text";

export const CompleteTodoCall=createAsyncThunk("todo/complete",async(payload:any)=>{
    try {
        console.log("payload in complete todo ",payload);
        const response =await authApiRequest(`${API_END_POINT.COMPLETE_TODO}`,payload,TextConstant.POST);
        console.log("Response in complete todo call",response);
        return response;
    } catch (error) {
        console.log("error in complete todo",error);
        return error;
    }
});
const initialState={
    loading:false,
    data:null,
    completeTodoSuccess:false
}
const compleTodoSlice=createSlice({
   name:"CompleteTodo",
   initialState,
   reducers:{},
   extraReducers(builder){
    builder.addCase(CompleteTodoCall.pending,(state)=>{
        state.loading=true
        state.completeTodoSuccess=false
    }).addCase(CompleteTodoCall.fulfilled,(state,action)=>{
        console.log("complete todo fullfiled",action);
        state.loading=false
        state.data=action.payload.data
        state.completeTodoSuccess=action.payload.success
    }).addCase(CompleteTodoCall.rejected,(state)=>{
        state.loading=false
        state.completeTodoSuccess=false
    })
   }
});

export default compleTodoSlice.reducer;