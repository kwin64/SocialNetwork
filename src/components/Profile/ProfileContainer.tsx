import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {initialStateType, setUserProfile} from "../../redux/profile-reducer";

type PropsType = {
    setUserProfile: (profile: string) => void
    postsData: initialStateType
    profile: null | string
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response: any) => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return(
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }

}

const mapStateToProps = (state: StateType) => ({
    profile: state.postsData.profile,
    postsData: state.postsData
})

// const ProfileUserWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);


