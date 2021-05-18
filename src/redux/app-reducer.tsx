import {AppThunk} from "./redux-store";
import {getAuthUsersData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
}

export type InitialAuthDataType = typeof initialState

const appReducer = (state: InitialAuthDataType = initialState, action: ActionsAuthType): InitialAuthDataType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS,
} as const)

export const initializeApp = (): AppThunk => (dispatch) => {
    dispatch(getAuthUsersData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

export type ActionsAuthType = ReturnType<typeof initializedSuccess>

export default appReducer;