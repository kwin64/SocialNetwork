import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

export type StateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    dialogsData: dialogsReducer,
    postsData: profileReducer,
    sidebarData: sidebarReducer,
    usersData: usersReducer,
    auth: authReducer
});

let store: Store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;