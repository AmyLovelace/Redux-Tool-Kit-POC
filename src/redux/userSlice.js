import {createSlice} from '@reduxjs/toolkit';

//estado inicial de user
const initialState = {
    username: "",
    email: "",
    password: ""

};

export const userSlice  = createSlice({
    name:"user",
    initialState,
    reducers: {
        addUser:(state,action)=>{
            const{username,email,password} = action.payload
            state.username = username;
            state.email = email;
            state.password = password;
        },
        changeEmail:(state,action)=>{
            state.email = action.payload
        }
    }
})

export const {addUser ,changeEmail} = userSlice.actions;
export default userSlice.reducer;
