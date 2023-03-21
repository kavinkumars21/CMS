import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const LoginData = createAsyncThunk("Login", async (data) => {
    return axio.post(`/api/login`, data);
});

export const LoginReducer = createSlice({
    name: "login",
    initialState: {
        Login: [],
        loading: false,
    },
    reducer: {},
    extraReducers: {
        [LoginData.pending]: (state, action) => {
            state.loading = true;
        },
        [LoginData.fulfilled]: (state, action) => {
            state.Login = action.payload;
            state.loading = false;
        },
        [LoginData.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});

export default LoginReducer.reducer;
