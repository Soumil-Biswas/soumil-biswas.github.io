import { createSlice } from "@reduxjs/toolkit";

const passwordSlice = createSlice({
    name: "password",
    initialState: [false, false, false],
    reducers: {
        togglePassword: (state, action) => {
            state[action.payload] = !state[action.payload]
        }
    }
})

export const { togglePassword } = passwordSlice.actions

export const passwordReducer = passwordSlice.reducer