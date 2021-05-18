import React, {ComponentType} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUsersProfile, OnePostItem, ProfileTypeForPosts, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {StateType} from "../../redux/redux-store";
import {compose} from "redux";

type OwnPropsType = {}
type MapStatePropsType = {
    postsData: Array<OnePostItem>
    profile: null | ProfileTypeForPosts
    status: string
    authorizedUserId: string
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUsersProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & MapDispatchPropsType & MapStatePropsType & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if(!userId) {
                this.props.history.push('/Login')
            }
        }
        this.props.getUsersProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                />
            </div>
        )
    }
}


const mapStateToProps = (state: StateType): MapStatePropsType => {

    return {
        postsData: state.postsData.postsItem,
        profile: state.postsData.profile,
        status: state.postsData.status,
        authorizedUserId: state.auth.data.id,
        isAuth: state.auth.data.isAuth
    }
}

export default compose<ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>(mapStateToProps, {
        getUsersProfile,
        getStatus,
        updateStatus
    }),
    withRouter
)(ProfileContainer)

