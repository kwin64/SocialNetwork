const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'


export type PhotosType = {
    small: null | string
    large: null | string
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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 16,
    isFetching: false
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
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_CURRENT_PAGE: {
            return {...state, totalUsersCount: action.currentPage}
        }
        case TOOGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

export const followAC = (userID: number) => ({type: FOLLOW, userID} as const)
export const unFollowAC = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsersAC = (users: Array<OneUserData>) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setUsersTotalCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const)
export const toogleIsFetchingAC = (isFetching: boolean) => ({type: TOOGLE_IS_FETCHING, isFetching} as const)

export type ActionsUsersType = ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC>
    | ReturnType<typeof toogleIsFetchingAC>

export default usersReducer;
