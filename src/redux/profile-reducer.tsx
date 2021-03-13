import {ActionsType, PostsDataType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
}

export type ActionsPostType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>
export const addPostAC = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        newPostText: newPostText
    } as const
}
export const updateNewPostTextAC = (newPostText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newPostText: newPostText
    } as const
}

const profileReducer = (state: PostsDataType = initialState, action: ActionsType): PostsDataType => {

    const stateCopy = {...state}

    switch (action.type) {
        case ADD_POST: {
            let post = {
                id: 5,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXQAMy48Pkvq3wmB9wngITgF95ZNOaXEK3FA&usqp=CAU',
                count: 0,
                post: state.newPostText,
                logoCountLikes: 'https://img.icons8.com/pastel-glyph/2x/facebook-like--v1.png',
            }
            stateCopy.postsItem.unshift(post)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            stateCopy.newPostText = action.newPostText
            return stateCopy
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostChangeActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, postMessage: text})

export default profileReducer;
