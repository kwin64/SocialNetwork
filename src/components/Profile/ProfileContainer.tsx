import React, {ComponentClass} from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {InitialProfileDataType, OnePostItem, ProfileTypeForPosts, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type StateType = {
    initialPostsData: InitialProfileDataType
}
type OwnPropsType = {}
type MapStatePropsType = {
    postsData: Array<OnePostItem>
    profile: null | ProfileTypeForPosts
}
type MapDispatchPropsType = {
    setUserProfile: (profile: null | ProfileTypeForPosts) => void
}
type PathParamsType = {
    userId: string | undefined
}
type PropsType = RouteComponentProps<PathParamsType> & MapDispatchPropsType & MapStatePropsType & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get<ProfileTypeForPosts>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then((response) => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        debugger
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
    debugger
    return {
        postsData: state.initialPostsData.postsItem,
        profile: state.initialPostsData.profile
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>
(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));


