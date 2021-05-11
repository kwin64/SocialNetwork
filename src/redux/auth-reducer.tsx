import {authAPI, headerAPI} from "../api";
import {AppThunk} from "./redux-store";

const SET_USER_DATA = 'SET-USER-DATA';

export type DataUser = {
    id: string
    login: string
    email: string
    isAuth: boolean
}

let initialState = {
    data: {
        id: '',
        login: '',
        email: '',
        isAuth: false
    } as DataUser,
    message: [],
    fieldsErrors: [],
    resultCode: 1 | 0,
}

export type InitialAuthDataType = typeof initialState

const authReducer = (state: InitialAuthDataType = initialState, action: ActionsAuthType): InitialAuthDataType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setUserData = (id: string, login: string, email: string, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {id, login, email, isAuth}
} as const)

export const getAuthUsersData = (): AppThunk => (dispatch) => {
    headerAPI.getAuth()
        .then(data => {
            if (data.data.resultCode === 0) {
                let {id, login, email} = data.data.data
                dispatch(setUserData(id, login, email, true))
            }
        })
}
export const login = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.data.resultCode === 0) {
                dispatch(getAuthUsersData())
            }
        })
}
export const logout = (): AppThunk => (dispatch) => {
    authAPI.logout()
        .then(data => {
            if (data.data.resultCode === 0) {
                dispatch(setUserData('', '', '', false))
            }
        })
}


export type ActionsAuthType = ReturnType<typeof setUserData>

export default authReducer;