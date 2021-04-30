import {headerAPI} from "../api";
import {AppThunk} from "./redux-store";

const SET_USER_DATA = 'SET-USER-DATA';

export type DataUser = {
    id: null
    login: null
    email: null
}

let initialState = {
    data: {
        id: null,
        login: null,
        email: null
    },
    message: [],
    fieldsErrors: [],
    resultCode: 1 | 0,
    isAuth: false
}

export type InitialAuthDataType = typeof initialState

const authReducer = (state: InitialAuthDataType = initialState, action: ActionsAuthType): InitialAuthDataType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setUserData = (data: DataUser) => ({type: SET_USER_DATA, data} as const)

export const getAuthUsersData = (): AppThunk => (dispatch) => {
    headerAPI.getAuth()
        .then(data => {
            if (data.data.resultCode === 0) {
                dispatch(setUserData(data.data.data))
            }
        })
}

export type ActionsAuthType = ReturnType<typeof setUserData>

export default authReducer;