import {combineReducers, configureStore} from "@reduxjs/toolkit";
import dialogSlice from './slices/dialogSlice'
import todoReducer from "./slices/todoSlice";

let reducers = combineReducers({
    todos: todoReducer,
    dialogs: dialogSlice
})

const store = configureStore({
    reducer: reducers
})

export default store