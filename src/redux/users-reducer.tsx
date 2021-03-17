const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type PhotosType = {
    small: null | string
    large:null | string
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

let initialState = {
    users: [],
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

export const follow = (userID: number) => ({type: FOLLOW, userID} as const)
export const unFollow = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsers = (users: Array<OneUserData>) => ({type: SET_USERS, users} as const)

export type ActionsUsersType = ReturnType<typeof follow> | ReturnType<typeof unFollow> | ReturnType<typeof setUsers>

export default usersReducer;
