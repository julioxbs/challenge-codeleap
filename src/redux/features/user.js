import { createSlice } from "@reduxjs/toolkit"

const initialValue = {name: ''};

export const userSlice = createSlice({
    name: 'user',

    initialState: {
        value: initialValue,
    },

    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;