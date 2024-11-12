import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiRequest from "../../services/rootservice";
import { TextConstant } from "../../constants/text";
import { API_END_POINT } from "../../services/apiEndPoint";

export const registerUser=createAsyncThunk('users/register',async(payload:{})=>{
    try {
        console.log('payload is',payload);
        const response=await apiRequest(`${API_END_POINT.REGISTER}`,payload,TextConstant.POST);
        console.log("response is ",response);
        return response.data;
    } catch (error) {
        return error;
    }
});

const initialState={
    loading:false,
    data:{}
};

const registerSlice=createSlice({
    name: "register",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(registerUser.pending, (state,action:any) => {
           // console.log("register user pending ",action);
            state.loading=true
        }).addCase(registerUser.fulfilled,(state,action)=>{
            const payload=action?.meta?.arg
           // console.log("register user fullfilled ",action.meta.arg);
            state.loading=false;
            state.data=payload
        }).addCase(registerUser.rejected,(state,action)=>{
          //  console.log("register user  ",action);
            state.loading=false
        })
    },
});
export default registerSlice.reducer;
