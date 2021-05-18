import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUsersData, logout} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";

type OwnPropsType = {}
type MapStatePropsType = {
    isAuth: boolean
    login: null | string
}
type MapDispatchPropsType = {
    logout: () => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class HeaderContainer extends React.Component<PropsType> {
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        isAuth: state.auth.data.isAuth,
        login: state.auth.data.login
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>
(mapStateToProps, {
    logout
})(HeaderContainer);
