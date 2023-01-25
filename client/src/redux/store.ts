import {combineReducers, configureStore} from "@reduxjs/toolkit";
import dialogSlice from './slices/dialogSlice'
import messagesSlice from "./slices/messagesSlice";

let reducers = combineReducers({
    dialogs: dialogSlice,
    messages: messagesSlice
})

const store = configureStore({
    reducer: reducers
})

export default store

export type RootState = ReturnType<typeof  store.getState>
export type AppDispatch = typeof store.dispatch