import {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {StateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: StateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.data.isAuth
    }
}

export function withAuthRedirect<T>(Сomponent: ComponentType<T>) {

    const RedirectComponent = (props: MapStateToPropsType) => {

        const {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>
        return <Сomponent {...restProps as T} />
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}