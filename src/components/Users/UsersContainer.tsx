import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {OneUserData, StateType} from "../../redux/redux-store";

let mapStateToProps = (store: StateType) => {
    return {
        userData: store.usersData.users
    }
}

let mapDispatchToProps = (dispatch: (arg0: { type: string; userID?: number; users?: OneUserData[]; }) => void) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<OneUserData>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)