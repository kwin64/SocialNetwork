import React from "react";
import UserAPIComponent from "./UserAPIComponent";
import {connect} from "react-redux";
import {ActionsUsersType, follow, OneUserData, setCurrentPage, setUsers, unFollow,} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {StateType} from "../../redux/redux-store";

let mapStateToProps = (store: StateType) => {
    return {
        userData: store.usersData.users,
        pageSize: store.usersData.pageSize,
        totalUsersCount: store.usersData.totalUsersCount,
        currentPage: store.usersData.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionsUsersType>) => {
    return {
        follow: (userID: number) => {
            dispatch(follow(userID))
        },
        unFollow: (userID: number) => {
            dispatch(unFollow(userID))
        },
        setUsers: (users: Array<OneUserData>) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPage(currentPage))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAPIComponent)