import {combineReducers, configureStore} from "@reduxjs/toolkit";
import dialogSlice from './slices/dialogSlice'

let reducers = combineReducers({
    dialogs: dialogSlice
})

const store = configureStore({
    reducer: reducers
})

export default store