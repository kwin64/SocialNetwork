import {AppThunk} from "./redux-store";
import {profileAPI} from "../api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

export type OnePostItem = {
    id: number,
    avatar: string,
    count: number,
    post: string,
    logoCountLikes: string
}
export type ContactsTypeForPosts = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type PhotosTypeForPosts = {
    small: string
    large: string
}
export type ProfileTypeForPosts = {
    aboutMe: string
    contacts: ContactsTypeForPosts
    lookingForAJob: boolean
    lookingForAJobDescription: null
    fullName: string
    userId: number
    photos: PhotosTypeForPosts
}

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
    profile: null as null | ProfileTypeForPosts,
    status: ''
}

export type InitialProfileDataType = typeof initialState

const profileReducer = (state: InitialProfileDataType = initialState, action: ActionsProfileType): InitialProfileDataType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXQAMy48Pkvq3wmB9wngITgF95ZNOaXEK3FA&usqp=CAU',
                count: 0,
                post: action.newPostBody,
                logoCountLikes: 'https://img.icons8.com/pastel-glyph/2x/facebook-like--v1.png',
            }
            return {
                ...state,
                postsItem: [newPost, ...state.postsItem]
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostBody: string) => ({type: ADD_POST, newPostBody} as const)
export const setUserProfile = (profile: null | ProfileTypeForPosts) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)

export const getUsersProfile = (userId: string): AppThunk => (dispatch) => {
    profileAPI.getInitialPage(userId)
        .then(data => {
            dispatch(setUserProfile(data.data))
        })
}
export const getStatus = (userId: string): AppThunk => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatus(data.data))
        })
}
export const updateStatus = (status: string): AppThunk => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.data.resultCode === 0)
                dispatch(setStatus(status))
        })
}

export type ActionsProfileType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>

export default profileReducer;
