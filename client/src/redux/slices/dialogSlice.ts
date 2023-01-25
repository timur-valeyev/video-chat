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

export const fetchDialogs = createAsyncThunk<IDialog[], undefined, {rejectValue: string}>(
    'dialogs/fetchDialogs',
    async function(_, {rejectWithValue}) {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            if (!response.ok) {
                rejectWithValue('Server Error')
            }
            const data = await response.json()
            return data
    }
)

export const choseDialog = createAsyncThunk<ICurrentDialog[],  number, {rejectValue: string}>(
    'dialogs/choseDialog',
    async function(id, {rejectWithValue}) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?id=${id}`)

            if (!response.ok) {
                return rejectWithValue('Server Error')
            }

            const data = await response.json()
            return data
    }
)

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

const dialogSlice = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {
        // addDialog: (state, action: PayloadAction<string>) => {
        //     state.dialogList.push({
        //         id: new Date().toISOString(),
        //         text: action.payload
        //     })
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDialogs.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchDialogs.fulfilled, (state, action) => {
                state.dialogList = action.payload
                state.loading = false
            })
            .addCase(fetchMessages.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchMessages.fulfilled, (state, action) => {
                state.currentDialog = action.payload
                state.loading = false
            })
            .addCase(choseDialog.fulfilled, (state, action) => {
                state.currentDialog = action.payload
            })
    }
})

export const {} = dialogSlice.actions
export default dialogSlice.reducer