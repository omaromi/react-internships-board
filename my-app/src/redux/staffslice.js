import { createSlice } from "@reduxjs/toolkit";

const staffSlice = createSlice({
    name: 'staff',
    initialState: {
        value: null,
    },
    reducers: {
        omar: (state) => {
            state.value = 'Omar'
        },
        iza: (state) => {
            state.value = 'Iza'
        },
        stephanie: (state) => {
            state.value = 'Stephanie'
        },
    }
});

export const { omar, iza, stephanie } = staffSlice.actions

export default staffSlice.reducer