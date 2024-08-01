import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    isAuthenticated: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signin: (state, action) => {
            state.isAuthenticated = true;
            state.currentUser = action.payload
        },

        logout: (state) => {
            state.isAuthenticated = false;
            state.currentUser = null;
        },
    },
})


export const { signin, logout } = userSlice.actions;

export default userSlice.reducer