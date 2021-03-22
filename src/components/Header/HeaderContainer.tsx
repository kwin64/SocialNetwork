import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {DataUser, InitialAuthDataType, setUserData} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";


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
        axios.get<InitialAuthDataType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setUserData(response.data.data)
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
