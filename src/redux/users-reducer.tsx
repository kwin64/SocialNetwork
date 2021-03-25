const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS'

export type PhotosType = {
    small: null | string
    large: null | string
}
export type OneUserData = {
    name: string
    id: number
    uniqueUrlName: null
    photos: PhotosType
    status: null
    followed: boolean
}

const UsersDataType = {
    items: [] as Array<OneUserData>,
    totalCount: 10981 ,
    error: null as null | number,
    pageSize: 5 as number,
    totalUsersCount: 20 as number,
    currentPage: 16 as number,
    isFetching: false as boolean,
    followingInProgress: [2,3,4] as Array<number>
}

export type InitialUsersDataType = typeof UsersDataType

const usersReducer = (state: InitialUsersDataType = UsersDataType, action: ActionsUsersType): InitialUsersDataType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                items: state.items.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                items: state.items.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, items: action.items}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOOGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOOGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id=>id!=action.userId)
            }
        }
        default:
            return state
    }
}

export const follow = (userID: number) => ({type: FOLLOW, userID} as const)
export const unFollow = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsers = (items: Array<OneUserData>) => ({type: SET_USERS, items} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOOGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({type: TOOGLE_IS_FOLLOWING_PROGRESS, isFetching,userId} as const)

export type ActionsUsersType = ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

export default usersReducer;
