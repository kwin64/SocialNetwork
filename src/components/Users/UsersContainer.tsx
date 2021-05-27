import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {follow, getUsers, OneUserData, setCurrentPage, unFollow,} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {StateType} from "../../redux/redux-store";
import {compose} from "redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUserData, getUserDataSuperSelector,
} from "../../redux/users-selectors";

type OwnPropsType = {}
type MapStatePropsType = {
    userData: Array<OneUserData>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
}
type MapDispatchPropsType = {
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
type PropsType = RouteComponentProps & MapDispatchPropsType & MapStatePropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount(): void {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render(): React.ReactNode {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users userData={this.props.userData}
                   pageSize={this.props.pageSize}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   totalUsersCount={this.props.totalUsersCount}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

// let mapStateToProps = (store: StateType): MapStatePropsType => {
//     return {
//         userData: store.usersData.items,
//         pageSize: store.usersData.pageSize,
//         totalUsersCount: store.usersData.totalUsersCount,
//         currentPage: store.usersData.currentPage,
//         isFetching: store.usersData.isFetching,
//         followingInProgress: store.usersData.followingInProgress
//     }
// }

let mapStateToProps = (store: StateType): MapStatePropsType => {
    return {
        userData: getUserDataSuperSelector(store),
        pageSize: getPageSize(store),
        totalUsersCount: getTotalUsersCount(store),
        currentPage: getCurrentPage(store),
        isFetching: getIsFetching(store),
        followingInProgress: getFollowingInProgress(store)
    }
}

export default compose<ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        getUsers
    }),
    withRouter
)(UsersContainer)
