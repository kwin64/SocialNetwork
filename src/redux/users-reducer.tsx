import {OneUserData, UsersDataType} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
}

export type ActionsUsersType = ReturnType<typeof follow> | ReturnType<typeof unFollow> | ReturnType<typeof setUsers>
export const follow = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID: userID
    } as const
}
export const unFollow = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID: userID
    } as const
}
export const setUsers = (users: Array<OneUserData>) => {
    return {
        type: 'SET_USERS',
        users: users
    } as const
}

const usersReducer = (state: UsersDataType = initialState, action: ActionsUsersType): UsersDataType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}


export const followAC = (userID: number) => ({type: FOLLOW, userID})
export const unfollowAC = (userID: number) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: Array<OneUserData>) => ({type: SET_USERS, users})

export default usersReducer;
