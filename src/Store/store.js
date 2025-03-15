import { configureStore } from '@reduxjs/toolkit'
import { passwordReducer } from './Auth/passwordSlice'

export const store = configureStore({
    reducer: {
        passwordReducer,
    }
})