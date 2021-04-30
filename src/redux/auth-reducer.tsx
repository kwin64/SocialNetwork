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

export type ActionsAuthType = ReturnType<typeof setUserData>

export default authReducer;