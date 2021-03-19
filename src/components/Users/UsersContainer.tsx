import React from "react";
import {connect} from "react-redux";
import {ActionsUsersType, follow, OneUserData, setCurrentPage, setUsers, unFollow,} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {StateType} from "../../redux/redux-store";
import axios from "axios";
import Users from "./Users";
import preloader from '../../assets/preloader.gif'

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
}

class UsersContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.setUsers(response.data.items)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.setUsers(response.data.items)
            })
    }

    render(): React.ReactNode {
        return <>
            {this.props.isFetching ? <img src={preloader} />: null}
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)