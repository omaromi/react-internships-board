import { createSlice } from "@reduxjs/toolkit";

// const { initialState } = useFetch('internships', [])
const initialState = {
    arr: []
}

export const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        savetoggle: (state, action) => {
            // find the array index for the specific object you want to savetoggle by validating their object.id matches the payload-object.id
            const arrIndex = state.arr.findIndex((obj => obj.id === action.payload.id));
            // reassign that entry in the array to the brand new object
            state.arr[arrIndex] = action.payload
        },
        preload: (state, action) => {
            state.arr = action.payload
        },

    }
})

export const { savetoggle, preload } = jobsSlice.actions

export default jobsSlice.reducer;