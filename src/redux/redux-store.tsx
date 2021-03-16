import {combineReducers, createStore} from "redux";
import profileReducer, {ActionsPostType} from "./profile-reducer";
import dialogsReducer, {ActionsMessageType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {ActionsUsersType} from "./users-reducer";

export type MessageItem = { id: number, message: string }
export type Message = {
    messageItem: Array<MessageItem>,
    newMessage: string
}
export type DialogItem = { id: number, name: string }
export type DialogsDataType = {
    dialogs: Array<DialogItem>,
    message: Message
}

export type OnePostItem = {
    id: number,
    avatar: string,
    count: number,
    post: string,
    logoCountLikes: string
}
export type PostsDataType = {
    postsItem: Array<OnePostItem>,
    newPostText: string
}

export type OneFriendItems = { id: number, avatar: string, name: string }
export type SidebarDataType = {
    friendsList: Array<OneFriendItems>
}

export type PhotosType = {
    small: null
    large:null
}
export type locationUserType = {
    city: string,
    country: string
}
export type OneUserData = {
    name: string,
    id: number,
    uniqueUrlName: null;
    photos: PhotosType,
    status: null
    followed: boolean
}
export type UsersDataType = {
    users: Array<OneUserData>
}

export type StateType = {
    dialogsData: DialogsDataType,
    postsData: PostsDataType,
    sidebarData: SidebarDataType,
    usersData: UsersDataType
}

export type ActionsType = ActionsPostType | ActionsMessageType | ActionsUsersType

let reducers = combineReducers({
    dialogsData: dialogsReducer,
    postsData: profileReducer,
    sidebarData: sidebarReducer,
    usersData: usersReducer
});

let store = createStore(reducers);

export default store;