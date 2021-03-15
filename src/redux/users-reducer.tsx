import {ActionsType, PostsDataType} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type UsersData = {
    users: Array<UserData>
}
export type LocationType = {
    city: string,
    country: string
}

export type UserData = {
    id: number,
    fullName: string,
    status: string,
    location: LocationType
    followed: boolean
}

let initialState = {
    users: [
        {
            id: 1,
            fullName: 'Eugene',
            status: 'status1',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            },
            followed: true
        },
        {
            id: 1,
            fullName: 'Alex',
            status: 'status1',
            location: {
                city: 'Kiev',
                country: 'Ukraine'
            },
            followed: true
        },
        {
            id: 2,
            fullName: 'Tatsiana',
            status: 'status2',
            location: {
                city: 'Moscow',
                country: 'Russia'
            },
            followed: false
        },
        {
            id: 3,
            fullName: 'Anna',
            status: 'status3',
            location: {
                city: 'England',
                country: 'London'
            },
            followed: false
        },
    ],
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
export const setUsers = (users: Array<UserData>) => {
    return {
        type: 'SET_USERS',
        users: users
    } as const
}

const usersReducer = (state: UsersData = initialState, action: ActionsUsersType): UsersData => {

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
export const setUsersAC = (users: Array<UserData>) => ({type: SET_USERS, users})

export default usersReducer;
