import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user', 
    initialState: null,
    reducers:{
        addUSer:(state, action) => {
            return action.payload
        },
        removeUSer:(state, action) => {
            return null
        }
    }
})

export const { addUSer, removeUSer } = userSlice.actions
export default userSlice.reducer;
