import {connect} from "react-redux";
import Profile from "./Profile";
import {StateType} from "../../redux/redux-store";

const mapStateToProps = (state: StateType) => {
    return {
        postsData: state.postsData
    }
}
const mapDispatchToProps = () => {

}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer;
