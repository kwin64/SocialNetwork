import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {StateType} from "../../redux/store";
import {followAC, setUsersAC, unfollowAC, UserData} from "../../redux/users-reducer";

let mapStateToProps = (state: StateType) => {
    return {
        users: state.
    }
}

let mapDispatchToProps = (dispatch: (arg0: { type: string; userID?: number; users?: UserData[]; }) => void) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UserData>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)