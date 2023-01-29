import {createSlice, createAsyncThunk, AnyAction} from "@reduxjs/toolkit";
import {IDialog, ICurrentDialog} from "../../types/data";


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

            const data = await response.clone().json()
            return data
    }
)


const dialogSlice = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {},
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
            .addCase(choseDialog.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(choseDialog.fulfilled, (state, action) => {
                state.loading = false
                state.currentDialog = action.payload
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

export const {} = dialogSlice.actions
export default dialogSlice.reducer