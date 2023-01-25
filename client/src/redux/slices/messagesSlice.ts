import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export interface IDialog {
    id: number,
    name: string,
    company: any
}

export interface ICurrentDialog  {
    id: number,
    title: any,
    body: any
}

interface DialogListState  {
    dialogList: IDialog[]
    currentDialog: ICurrentDialog[]
    loading: boolean
    error: string | null
}

const initialState: DialogListState = {
    dialogList: [],
    currentDialog: [],
    loading: false,
    error: null
}

export const fetchMessages = createAsyncThunk<ICurrentDialog[], undefined, {rejectValue: string}>(
    'dialogs/fetchMessages',
    async function(_, {rejectWithValue}) {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        if (!response.ok) {
            rejectWithValue('Server Error')
        }
        const data = await response.json()
        return data
    }
)

const messagesSlice = createSlice({
    name: 'dialogs',
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

    }
})

export const {} = messagesSlice.actions
export default messagesSlice.reducer