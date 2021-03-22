import {combineReducers, createStore, Store} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

export type StateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    dialogsData: dialogsReducer,
    postsData: profileReducer,
    sidebarData: sidebarReducer,
    usersData: usersReducer,
    auth: authReducer
});

let store: Store = createStore(reducers);

export default store;