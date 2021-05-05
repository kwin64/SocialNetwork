import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import profileReducer, {ActionsProfileType} from "./profile-reducer";
import dialogsReducer, {ActionsDialogsType,} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {ActionsUsersType} from "./users-reducer";
import authReducer, {ActionsAuthType} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

export type StateType = ReturnType<typeof reducers>
export type ActionsType = ActionsProfileType | ActionsAuthType | ActionsDialogsType | ActionsUsersType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    StateType,
    unknown,
    ActionsType>

let reducers = combineReducers({
    dialogsData: dialogsReducer,
    postsData: profileReducer,
    sidebarData: sidebarReducer,
    usersData: usersReducer,
    auth: authReducer,
    form: formReducer
});

let store: Store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;