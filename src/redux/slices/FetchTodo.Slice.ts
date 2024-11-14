import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApiRequest } from "../../services/rootservice";
import { API_END_POINT } from "../../services/apiEndPoint";
import { TextConstant } from "../../constants/text";

export const fetchTodoCall=createAsyncThunk('todo/fetch',async(id)=>{
    try {
        console.log("payload in fetchtodo",id);
        const response = await authApiRequest(`${API_END_POINT.FETCH_TODO}?id=${id}`,{},TextConstant.GET);
        return response;
    } catch (error) {
        console.log("error in fetchtodocall");
        return error
    }
});
const initialState={
    loading:false,
    data:[],

};

const fetchTodoSlice=createSlice({
    name:'fetchtodo',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(fetchTodoCall.pending,(state)=>{
            state.loading=true
        }).addCase(fetchTodoCall.fulfilled,(state,action)=>{
           // console.log("fetchtodo onsuccess",action.payload);
            state.loading=false
            state.data=action.payload.data
        }).addCase(fetchTodoCall.rejected,(state)=>{
            state.loading=false
        })
    },
});
export default fetchTodoSlice.reducer;
