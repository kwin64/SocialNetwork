import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import { StateType } from "../../redux/redux-store";

type PropsType = {

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
                <Profile {this.props} />
            </div>
        )
    }

}

const mapStateToProps = (state: StateType) => ({a:13})

export default connect(mapStateToProps, setUserProfile)(Profile);
//

