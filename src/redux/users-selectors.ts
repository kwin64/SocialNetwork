import {StateType} from "./redux-store";

export const getUserData = (state: StateType) => {
    return state.usersData.items
}
export const getPageSize = (state: StateType) => {
    return state.usersData.pageSize
}
export const getTotalUsersCount = (state: StateType) => {
    return state.usersData.totalUsersCount
}
export const getCurrentPage = (state: StateType) => {
    return state.usersData.currentPage
}
export const getIsFetching = (state: StateType) => {
    return state.usersData.isFetching
}
export const getFollowingInProgress = (state: StateType) => {
    return state.usersData.followingInProgress
}