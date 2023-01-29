import {createSlice, createAsyncThunk, AnyAction} from "@reduxjs/toolkit";
import {ICurrentDialog} from "../../types/data";

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

export const fetchMessages = createAsyncThunk<ICurrentDialog[], number, {rejectValue: string}>(
    'messages/fetchMessages',
    async function(id, {rejectWithValue}) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?id=${id}`)
        if (!response.ok) {
            rejectWithValue('Server Error')
        }
        const data = await response.json()
        return data
    }
)


export const addMessage = createAsyncThunk<ICurrentDialog, string, {rejectValue: string}>(
    'messages/addMessage',
    async function (text,{rejectWithValue}){
        console.log('text slice ', text)
        const message = {
            id: 1,
            name: 'user',
            email: 'user',
            body: text,
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        });

        if(!response.ok) {
            return rejectWithValue('Error')
        }
        return (await response.clone().json()) as ICurrentDialog
    }
)

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMessages.pending, state => {
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
                state.currentDialog.push(action.payload);
            })
            .addMatcher(isError, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
    }
})

function isError(action: AnyAction) {
    return action.type.endsWith('rejected');
}

export default messagesSlice.reducer