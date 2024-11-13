import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiRequest from "../../services/rootservice";
import { API_END_POINT } from "../../services/apiEndPoint";
import { TextConstant } from "../../constants/text";

export const logInUser=createAsyncThunk('fetch/signin',async(payload:{})=>{
    try {
        const response=await apiRequest(API_END_POINT.LOGIN,payload,TextConstant.POST);
        console.log("response is",response);
        return response;
    } catch (error) {
        console.log("error is",{error});

        return {error};
    }
});

const initialState={
   loading:false,
   data:{},
   logInSuccess:false,
   error:{}
};

 const loginSlice=createSlice({
    name:"Login",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(logInUser.pending,(state,action)=>{
            // console.log("login pending");
           state.loading=true
           state.logInSuccess=false
        }).addCase(logInUser.fulfilled,(state,action)=>{
            const payload=action?.meta?.arg;
            console.log("login success :",action.payload.success);
            if (action.payload.success==false) {
                state.error=action.payload
            }
           state.loading=false
           state.data=action.payload.data
           state.logInSuccess=action.payload.success
        }).addCase(logInUser.rejected,(state,action)=>{
            console.log("login error",action);     
            state.loading=false
            state.logInSuccess=false
            state.error=action
        })
    }
});

export default loginSlice.reducer;
