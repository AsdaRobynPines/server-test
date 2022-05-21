import { createSlice } from "@reduxjs/toolkit"

export const slice = createSlice({
    name: 'status',
    initialState: {
        status: 'no calls!'
    },
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload;
        }
    }
})
