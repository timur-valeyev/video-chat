import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit'
import { IDialog, ICurrentDialog } from '../../types/data'
import { dialogsAPI } from '../../utils/api/dialogsAPI'

interface DialogListState {
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

export const fetchDialogs = createAsyncThunk<IDialog[]>(
    'dialogs/fetchDialogs',
    async (_, thunkAPI) => {
        try {
            return await dialogsAPI.getAllDialogs().then((response) => {
                return response.data
            })
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const choseDialog = createAsyncThunk<ICurrentDialog[], number>(
    'dialogs/choseDialog',
    async (id, thunkAPI) => {
        try {
            return await dialogsAPI.getCurrentDialog(id).then((response) => {
                return response.data
            })
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
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
    return action.type.endsWith('rejected')
}

export default dialogSlice.reducer
