const SET_USER_DATA = 'SET-USER-DATA';

export type DataUser = {
    id: null | number
    login: null | string
    email: null | string
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
    isAuth: false as boolean
}

export type InitialAuthDataType = typeof initialState

const authReducer = (state: InitialAuthDataType = initialState, action: ActionsMessageType): InitialAuthDataType => {
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

export type ActionsMessageType = ReturnType<typeof setUserData>

export default authReducer;