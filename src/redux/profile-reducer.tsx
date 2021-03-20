const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type OnePostItem = {
    id: number,
    avatar: string,
    count: number,
    post: string,
    logoCountLikes: string
}
// export type ContactsTypeForPosts = {
//     facebook: null | string
//     website: null | string
//     vk: null | string
//     twitter: null | string
//     instagram: null | string
//     youtube: null | string
//     github: null | string
//     mainLink: null | string
// }
// export type PhotosTypeForPosts = {
//     small: null | string
//     large: null | string
// }
// export type ProfileTypeForPosts = {
//     aboutMe: null | string
//     contacts: ContactsTypeForPosts
//     lookingForAJobDescription: null | string
//     fullName: null | string
//     userId: number
//     photos: PhotosTypeForPosts
// }

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
    ] as Array<OnePostItem>,
    newPostText: '' as string,
    profile: null as null|string
}

export type initialStateType = typeof initialState

const profileReducer = (state: initialStateType = initialState, action: ActionsPostType): initialStateType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXQAMy48Pkvq3wmB9wngITgF95ZNOaXEK3FA&usqp=CAU',
                count: 0,
                post: state.newPostText,
                logoCountLikes: 'https://img.icons8.com/pastel-glyph/2x/facebook-like--v1.png',
            }
            return {
                ...state,
                postsItem: [newPost, ...state.postsItem],
                newPostText: '',
                profile: null
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPostText
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const updateNewPostChangeActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text
} as const)
export const setUserProfile = (profile: null | string) => ({type: SET_USER_PROFILE, profile} as const)

export type ActionsPostType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostChangeActionCreator>
    | ReturnType<typeof setUserProfile>

export default profileReducer;
