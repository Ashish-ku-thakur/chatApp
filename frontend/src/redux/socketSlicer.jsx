import { createSlice } from '@reduxjs/toolkit';

let socketSlicer = createSlice({
    name: "socket",
    initialState: {
        socket: null
    },
    reducers: {
        setSocket: (state, action) => {
            state.socket = action?.payload
        }
    }
})

export default socketSlicer.reducer
export let { setSocket } = socketSlicer.actions