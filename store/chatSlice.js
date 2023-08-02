import { createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        value: {}
    },
    reducers: {
        setChat: (state, action) => {
            if (action.payload && Object.keys(action.payload).length) {
                state.value = action.payload
            } else {
                state.value = {}
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { setChat } = chatSlice.actions

export default chatSlice.reducer