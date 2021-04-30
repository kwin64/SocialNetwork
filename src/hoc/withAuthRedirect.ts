import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {StateType} from "../redux/redux-store";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state: StateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Сomponent: any) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login' />
        return <Component {...this.props}/>
        }
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}