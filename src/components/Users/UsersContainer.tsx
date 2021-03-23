import React from "react";
import {connect} from "react-redux";
import {
    follow,
    OneUserData,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {StateType} from "../../redux/redux-store";
import {usersAPI} from "../../api";

type OwnPropsType = {}
type MapStatePropsType = {
    userData: Array<OneUserData>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<OneUserData>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
type PropsType = MapDispatchPropsType & MapStatePropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount(): void {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then((data) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
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
            />
        </>
    }
}

let mapStateToProps = (store: StateType): MapStatePropsType => {
    return {
        userData: store.usersData.items,
        pageSize: store.usersData.pageSize,
        totalUsersCount: store.usersData.totalUsersCount,
        currentPage: store.usersData.currentPage,
        isFetching: store.usersData.isFetching
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainer)