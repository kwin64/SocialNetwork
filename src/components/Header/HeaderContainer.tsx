import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {DataUser, setUserData} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";
import {headerAPI} from "../../api";

type OwnPropsType = {}
type MapStatePropsType = {
    isAuth: boolean
    login: null | string
}
type MapDispatchPropsType = {
    setUserData: (data: DataUser) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        headerAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setUserData(data.data)
                }
            })
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
(mapStateToProps, {setUserData})(HeaderContainer);
