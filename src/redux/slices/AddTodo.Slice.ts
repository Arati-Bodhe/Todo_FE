import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApiRequest } from "../../services/rootservice";
import { API_END_POINT } from "../../services/apiEndPoint";
import { TextConstant } from "../../constants/text";

export const AddTodoCall = createAsyncThunk("add/todo", async (payload) => {
  try {
    console.log("payload is",payload);
    
    const response = await authApiRequest(`${API_END_POINT.ADD_TODO}`, payload, TextConstant.POST);
    console.log("response in addtodo", response);
    return response;
  } catch (error) {
    console.log("error addto", error);
    throw error; // Re-throw error to let createAsyncThunk handle it
  }
});

const initialState = {
  loading: false,
  data: null,
  addTodoSuccess:false
};

const addTodoSlice = createSlice({
  name: "AddTodoCall",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddTodoCall.pending, (state) => {
        console.log("addtodo pending"); // Logs action object
        state.loading = true;
        state.addTodoSuccess=false
      })
      .addCase(AddTodoCall.fulfilled, (state, action) => {
        console.log("addtodo action payload", action.payload.data); // Logs only the payload
        state.addTodoSuccess=action.payload.success;
        state.loading = false;
        state.data = action.payload; // Store the payload data in the state
      })
      .addCase(AddTodoCall.rejected, (state, action) => {
        console.log("addtodo error", action.error); // Log any error that was thrown
        state.loading = false;
        state.addTodoSuccess=false
      });
  },
});

export default addTodoSlice.reducer;
