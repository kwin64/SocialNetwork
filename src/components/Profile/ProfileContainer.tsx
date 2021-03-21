import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {InitialProfileDataType, OnePostItem, ProfileTypeForPosts, setUserProfile} from "../../redux/profile-reducer";

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
type PropsType = MapDispatchPropsType & MapStatePropsType & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        axios.get<ProfileTypeForPosts>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response) => {//?????
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

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>(mapStateToProps, {
    setUserProfile
})(ProfileContainer);


