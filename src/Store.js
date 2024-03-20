import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice' 
import basketReducer from './basketSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        basket : basketReducer,
    }
})

export default store