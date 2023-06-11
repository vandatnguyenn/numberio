import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null,
    isLogin: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            console.log(action.payload);
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogin = true;
        },
        Logout(state) {
            state.user = null;
            state.token = null;
            state.isLogin = false;
        },
        setUser(state, action) {
            state.user = action.payload;
        }
    }
});

export default authSlice;