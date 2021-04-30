import axios from "axios";
import {InitialUsersDataType} from "./redux/users-reducer";
import {ProfileTypeForPosts} from "./redux/profile-reducer";
import {InitialAuthDataType} from "./redux/auth-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '88dd1de0-c1b0-42af-b356-99b240111496'
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<InitialUsersDataType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getInitialPage(userId: string) {
        return instance.get<ProfileTypeForPosts>(`profile/` + userId)
            .then(response => {
                return response.data
            })
    }
}

export const headerAPI = {
    getAuth() {
        return instance.get<InitialAuthDataType>(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}

export const subscribeAPI = {
    getUnFollow(id: number) {
        return instance.delete<InitialAuthDataType>(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    getFollow(id: number) {
        return instance.post<InitialAuthDataType>(`follow/${id}`, {})
            .then(response => {
                    return response.data
                }
            )
    }
}