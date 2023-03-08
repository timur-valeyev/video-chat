import { combineReducers, configureStore } from '@reduxjs/toolkit'
import dialogSlice from './slices/dialogSlice'
import messagesSlice from './slices/messagesSlice'
import authSlice from './slices/authSlice'

const reducers = combineReducers({
    dialogs: dialogSlice,
    messages: messagesSlice,
    auth: authSlice
})

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
