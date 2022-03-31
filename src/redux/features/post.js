import { createSlice } from "@reduxjs/toolkit"

const initialValue = [];

export const postSlice = createSlice({
    name: 'post',

    initialState: {
        value: initialValue,
    },

    reducers: {
        postAdd: (state, action) => {
            state.value.push(action.payload);
        },
        removeItem: (state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload.id)
        },
    },
});

export const { postAdd, removeItem } = postSlice.actions;
export default postSlice.reducer;