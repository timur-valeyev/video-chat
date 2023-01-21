import {configureStore} from "@reduxjs/toolkit";
import slice from './slices/slice'

const store = configureStore({
    reducer: slice
})

export default store