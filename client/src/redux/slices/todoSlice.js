import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos : ['eqweqw  ']
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(state)
            console.log(action)

            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text
            })
        }
    }
})

export const {addTodo} = todoSlice.actions
export default todoSlice.reducer