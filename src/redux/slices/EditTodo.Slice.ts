import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApiRequest } from "../../services/rootservice";
import { API_END_POINT } from "../../services/apiEndPoint";
import { TextConstant } from "../../constants/text";

export const EditTodoCall = createAsyncThunk("edit/todo", async (payload:{}) => {
  try {
    const response = await authApiRequest(`${API_END_POINT.EDIT_TODO}`, payload, TextConstant.POST);
    return response;
  } catch (error) {
    return error; 
  }
});

const initialState = {
  loading: false,
  data: null,
  addTodoSuccess:false
};

const editTodoSlice = createSlice({
  name: "EditTodoCall",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(EditTodoCall.pending, (state) => {
        state.loading = true;
      })
      .addCase(EditTodoCall.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data; // Store the payload data in the state
      })
      .addCase(EditTodoCall.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default editTodoSlice.reducer;
