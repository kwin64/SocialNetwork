import React, {ComponentClass} from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {InitialProfileDataType, OnePostItem, ProfileTypeForPosts, setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

type StateType = {
    postsData: InitialProfileDataType
}
type OwnPropsType = {}
type MapStatePropsType = {
    postsData: Array<OnePostItem>
    profile: null | ProfileTypeForPosts
}
type MapDispatchPropsType = {
    setUserProfile: (profile: null | ProfileTypeForPosts) => void
}
interface WithRouter {
    match: ObjectWithAnyKeys;
    location: ObjectWithAnyKeys;
    history: ObjectWithAnyKeys;
}
interface ObjectWithAnyKeys {
    [s: string]: string;
}
type PropsType = MapDispatchPropsType & MapStatePropsType & OwnPropsType

class ProfileContainer extends React.Component<PropsType & WithRouter> {

    componentDidMount(): void {
        let userId = this.props.match
        if (!userId) {
            userId = 2
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

const mapStateToProps = (state: StateType): MapStatePropsType => ({
    postsData: state.postsData.postsItem,
    profile: state.postsData.profile
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>(mapStateToProps, {
    setUserProfile
})(WithUrlDataContainerComponent);


