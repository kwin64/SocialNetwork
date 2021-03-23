import axios from "axios";
import { InitialUsersDataType } from "./redux/users-reducer";

export const getUsers = (currentPage : number = 1, pageSize: number = 10) => {
    return axios.get<InitialUsersDataType>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials: true
        })
        .then(response => {
            return response.data
        })
}