import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id : "005",
    name : "Anonymous",
    profile_img : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/640px-Anonymous_emblem.svg.png",
    likePosts : [],
}

const {actions, reducer} = createSlice({
    name : 'current_user',
    initialState,
    reducers : {
        setUp : (state, action) =>  {
            const {payload} = action
            return payload;
        }
    }
})

export default reducer;

export const {setUp} = actions