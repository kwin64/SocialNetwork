import React from "react";
import {connect} from "react-redux";
import {
    follow,
    OneUserData,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching,
    unFollow,
} from "../../redux/users-reducer";
import {StateType} from "../../redux/redux-store";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";

type PropsType = {
    userData: Array<OneUserData>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<OneUserData>) => void
    setCurrentPage: (currentPage: number) => void
    isFetching: boolean
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
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

let mapStateToProps = (store: StateType) => {
    return {
        userData: store.usersData.users,
        pageSize: store.usersData.pageSize,
        totalUsersCount: store.usersData.totalUsersCount,
        currentPage: store.usersData.currentPage,
        isFetching: store.usersData.isFetching
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainer)