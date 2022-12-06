import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    byId: {
    },
    allIds: [
    ]
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setUp: (state, { payload }) => {
            return payload
        },
        addPostData: (state, { payload }) => {
            const post = payload
            state.byId[post.id] = post
            state.allIds.push(post.id)
        },
        likePost: (state, action) => {
            const post_id = action.payload;
            const index = state.is_like.indexOf(post_id)
            if (index > -1) {
                state.is_like.splice(index, 1)
            } else {
                state.is_like.push(post_id)
            }
        }
    }
})

const { actions, reducer } = postSlice;

export const { setUp, addPostData, likePost } = actions;

export default reducer;