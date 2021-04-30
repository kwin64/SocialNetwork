import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersProfile, OnePostItem, ProfileTypeForPosts} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {StateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type OwnPropsType = {}
type MapStatePropsType = {
    postsData: Array<OnePostItem>
    profile: null | ProfileTypeForPosts
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUsersProfile: (userId: string) => void
}
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & MapDispatchPropsType & MapStatePropsType & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUsersProfile(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                />
            </div>
        )
    }
}


const mapStateToProps = (state: StateType): MapStatePropsType => {

    return {
        postsData: state.postsData.postsItem,
        profile: state.postsData.profile,
        isAuth: state.auth.isAuth
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToPropsForRedirect = (state: StateType): MapStatePropsType => ({
        isAuth: state.auth.isAuth
    })

let AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>
(mapStateToProps, {getUsersProfile})(withRouter(AuthRedirectComponent));


