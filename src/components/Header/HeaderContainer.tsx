import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUsersData} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";

type OwnPropsType = {}
type MapStatePropsType = {
    isAuth: boolean
    login: null | string
}
type MapDispatchPropsType = {
    getAuthUsersData: () => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        this.props.getAuthUsersData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>
(mapStateToProps, {getAuthUsersData})(HeaderContainer);
