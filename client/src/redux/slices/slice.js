import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    "dialogs" : [
        {"id": 1, "name": "Jack", "shortText": "Hello, watsuuup..."},
        {"id": 2, "name": "Mike", "shortText": "Call me back please..."},
        {"id": 3, "name": "Sara", "shortText": "how are youdsdsdsdsdsdsdsdsdsdsdssdsdsd?..."},
        {"id": 4, "name": "Dave", "shortText": "could you check email please..."}
    ]
}

const slice = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {
        getDialogs: (state, action) => {
            console.log(state)
        }
    }
})

export default slice