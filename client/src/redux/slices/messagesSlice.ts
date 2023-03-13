import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit'
import { ICurrentDialog } from '../../types/data'

import io from 'socket.io-client'
import { instance } from '../../utils/axios/instance'

export const socket = io('http://localhost:8888/chat')

interface MessagesListState {
    currentDialog: ICurrentDialog[]
    loading: boolean
    error: string | null
}

const initialState: MessagesListState = {
    currentDialog: [],
    loading: false,
    error: null
}

export const fetchMessages = createAsyncThunk(
    'messages/fetchMessages',
    async (_, thunkAPI) => {
        try {
            return await instance.get('messages/get-all-messages').then((response) => {
                console.log(response)
                return response.data
            })
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const addMessage = createAsyncThunk<ICurrentDialog, string>(
    'messages/addMessage',
    async (text, thunkAPI) => {
        try {
            return new Promise((resolve, reject) => {
                socket.on('message', (message) => {
                    resolve(message)
                })
                socket.on('error', (error) => {
                    reject(error)
                })
            })
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMessages.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchMessages.fulfilled, (state, action) => {
                state.currentDialog = action.payload
                state.loading = false
            })
            .addCase(addMessage.pending, (state) => {
                state.error = null
            })
            .addCase(addMessage.fulfilled, (state, action) => {
                console.log(action.payload)
                state.currentDialog.push(action.payload)
            })
            .addMatcher(isError, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
    }
})

function isError(action: AnyAction) {
    return action.type.endsWith('rejected')
}

export default messagesSlice.reducer