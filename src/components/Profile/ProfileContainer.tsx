import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {InitialProfileDataType, OnePostItem, setUserProfile} from "../../redux/profile-reducer";

type StateType = {
    postsData: InitialProfileDataType
}
type OwnPropsType = {}
type MapStatePropsType = {
    postsData: Array<OnePostItem>
    profile: null | string
}
type MapDispatchPropsType = {
    setUserProfile: (profile: null | string) => void
}
type PropsType = MapDispatchPropsType & MapStatePropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response: any) => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: StateType) => ({
    postsData: state.postsData.postsItem,
    profile: state.postsData.profile
})

export default connect<MapStatePropsType, MapDispatchPropsType, {}, StateType>(mapStateToProps, {
    setUserProfile
})(ProfileContainer);


