import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {StateType} from "../../redux/redux-store";
import Description from "./Description/Description";
import MyPosts from "./MyPosts/MyPosts";

type PropsType = {

}

class ProfileContainer extends React.Component<PropsType> {
    render() {
        return(
            <div>
                <Description/>
                <MyPosts postsData={props.postsData}/>
            </div>
        )
    }

}


const mapStateToProps = (state: StateType) => {
    return {
        postsData: state.postsData
    }
}
const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

