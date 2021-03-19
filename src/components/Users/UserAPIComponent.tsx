import React from 'react';
import axios from 'axios';
import {OneUserData} from '../../redux/users-reducer';
import Users from "./Users";

type PropsType = {
    userData: Array<OneUserData>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<OneUserData>) => void
    setCurrentPage: (currentPage: number) => void
}

class UserAPIComponent extends React.Component<PropsType> {

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
        return <Users userData={this.props.userData}
                      pageSize={this.props.pageSize}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}
                      totalUsersCount={this.props.totalUsersCount}
                      onPageChanged={this.onPageChanged}
        />
    }
}

export default UserAPIComponent;
