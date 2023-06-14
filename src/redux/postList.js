import { createSlice } from '@reduxjs/toolkit'

export const postListSlice = createSlice({
    name: 'postList',
    initialState: {value: [] },
    reducers: {
        setState: (state, action)=> {
            state.value = action.payload
        },
        updateState: (state, action) => {
            state.value = [action.payload,...state.value]
        }
    }
})

export const {setState, updateState} = postListSlice.actions

export default postListSlice.reducer