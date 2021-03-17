import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {ActionsUsersType, follow, OneUserData, setUsers, unFollow,} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {StateType} from "../../redux/redux-store";

let mapStateToProps = (store: StateType) => {
    return {
        userData: store.usersData.users
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)