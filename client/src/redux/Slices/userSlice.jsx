
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
    isAuthenticated: !!localStorage.getItem('currentUser')
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signin: (state, action) => {
            state.isAuthenticated = true;
            state.currentUser = action.payload;
            localStorage.setItem('currentUser', JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.currentUser = null;
            localStorage.removeItem('currentUser');
        },
    },
});

export const { signin, logout } = userSlice.actions;

export default userSlice.reducer;
