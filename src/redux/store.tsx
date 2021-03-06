import React from 'react';
import profileReducer, {ActionsPostType} from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer, {ActionsMessageType} from "./dialogs-reducer";

export type FriendsListType = {
    id: number,
    avatar: string,
    name: string,
}
export type PostsItemType = {
    id: number,
    avatar: string,
    count: number,
    post: string,
    logoCountLikes: string,
}
export type MessagesItemType = {
    id: number,
    message: string,
}
export type DialogsItemType = {
    id: number,
    name: string
}

export type MessageType = {
    messagesItem: Array<MessagesItemType>,
    newMessage: string
}
export type DialogsType = {
    dialogsItem: Array<DialogsItemType>
}

export type SidebarDataType = {
    friendsList: Array<FriendsListType>
}
export type PostsDataType = {
    postsItem: Array<PostsItemType>,
    newPostText: string
}
export type DialogDataType = {
    dialogs: DialogsType,
    message: MessageType,
}

export type StateType = {
    dialogsData: DialogDataType,
    postsData: PostsDataType,
    sidebarData: SidebarDataType
}

export type StoreType = {
    _state: StateType,
    _callSubscriber: any,
    getState: () => StateType,
    subscribe: (callback: ()=> void) => void,
    dispatch: (action: ActionsType) => void
}
export type ActionsType = ActionsPostType | ActionsMessageType

let store: StoreType = {
    _state: {
        dialogsData: {
            dialogs: {
                dialogsItem: [
                    {id: 1, name: 'Eugene'},
                    {id: 2, name: 'Anna'},
                    {id: 3, name: 'Alex'},
                    {id: 4, name: 'Tatsiana'},
                ],
            },
            message: {
                messagesItem: [
                    {id: 1, message: 'message1'},
                    {id: 2, message: 'message2'},
                    {id: 3, message: 'message3'},
                ],
                newMessage: '',
            },
        },
        postsData: {
            postsItem: [
                {
                    id: 1,
                    avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-376-456328.png',
                    count: 15,
                    post: 'Post1',
                    logoCountLikes: 'https://img.icons8.com/pastel-glyph/2x/facebook-like--v1.png'
                },
                {
                    id: 2,
                    avatar: 'https://iconape.com/wp-content/png_logo_vector/avatar-4.png',
                    count: 53,
                    post: 'Post2',
                    logoCountLikes: 'https://img.icons8.com/pastel-glyph/2x/facebook-like--v1.png'
                },
                {
                    id: 3,
                    avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png',
                    count: 24,
                    post: 'Post3',
                    logoCountLikes: 'https://img.icons8.com/pastel-glyph/2x/facebook-like--v1.png'
                },
                {
                    id: 4,
                    avatar: 'http://cdn.onlinewebfonts.com/svg/img_173956.png',
                    count: 56,
                    post: 'Post4',
                    logoCountLikes: 'https://img.icons8.com/pastel-glyph/2x/facebook-like--v1.png'
                }
            ],
            newPostText: ''
        },
        sidebarData: {
            friendsList: [
                {id: 1, avatar: 'https://avatarko.ru/img/kartinka/1/zhivotnye_catmen.jpg', name: 'Tatsiana'},
                {
                    id: 2,
                    avatar: 'https://i.pinimg.com/originals/5b/1a/9a/5b1a9ab141ba1ade4ab06c8215059225.jpg',
                    name: 'Anna'
                },
                {id: 3, avatar: 'https://avatarko.ru/img/kartinka/2/zhivotnye_kot_prikol_1767.jpg', name: 'Alex'}
            ]

        }
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer;
    },
    dispatch(action: any) {
        this._state.postsData = profileReducer(this._state.postsData, action);
        this._state.dialogsData = dialogsReducer(this._state.dialogsData, action);
        this._state.sidebarData = sidebarReducer(this._state.sidebarData, action);
        this._callSubscriber(this._state)
    }
}

export default store;


