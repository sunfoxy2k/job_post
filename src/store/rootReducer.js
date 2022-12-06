import {combineReducers} from "@reduxjs/toolkit";
import UI_reducer from "@/modules/UI_Component/reducer";
import {api } from "@/api/index";
import auth from './auth.reducer'
import {logout as logoutAction} from './auth.reducer'
import posts from '@/modules/Post/slice'

const appReducer = combineReducers({
    ui: UI_reducer,
    auth,    
    [api.reducerPath] : api.reducer,
    posts 
});

const rootReducer = (state, action) => {
    if (logoutAction.match(action)) {
        state = {};
    }

    return appReducer(state, action)
}

export default rootReducer;