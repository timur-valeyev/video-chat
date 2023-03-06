import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit'
import { ICurrentDialog } from '../../types/data'
import { messagesAPI } from '../../utils/api/messagesAPI'

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

export const fetchMessages = createAsyncThunk<ICurrentDialog[], number>(
    'messages/fetchMessages',
    async (id, thunkAPI) => {
        try {
            return await messagesAPI.getAllMessages(id).then((response) => {
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
            return await messagesAPI.addMessage(text).then((response) => {
                return response.data
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