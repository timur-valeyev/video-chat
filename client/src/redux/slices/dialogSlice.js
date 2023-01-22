import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchDialogs = createAsyncThunk(
    'dialogs/fetchDialogs',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            if (!response.ok) {
                throw new Error('Server Error')
            }

            const data = await response.json()

            return data

        } catch (err) {
            return rejectWithValue(err.message)
        }


    }
)

const dialogSlice = createSlice({
    name: 'dialogs',
    initialState: {
        dialogList: [],
        status: null,
        error: null
    },
    reducers: {
        // addDialog: (state, action) => {
        //     state.dialogs.push({
        //         id: new Date().toISOString(),
        //         text: action.payload.text
        //     })
        // }
    },
    extraReducers: {
        [fetchDialogs.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchDialogs.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.dialogList = action.payload
        },
        [fetchDialogs.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

export const {addDialogs} = dialogSlice.actions
export default dialogSlice.reducer