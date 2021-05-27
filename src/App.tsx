import React, {ComponentType} from 'react';
import './App.css'
import {Route} from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {StateType} from "./redux/redux-store";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";

type MapDispatchPropsType = {
    initializeApp: () => void
}
type OwnPropsType = {}
type MapStatePropsType = {
    initialized: boolean
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


class App extends React.Component<PropsType> {
    componentDidMount(): void {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className={'appWrapper'}>
                <HeaderContainer/>
                <SidebarContainer/>
                <div className={'appWrapperContent'}>
                    <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/Users' render={() => <UsersContainer/>}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/Settings' component={Settings}/>
                    <Route path='/Login' component={Login}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: StateType): MapStatePropsType => ({initialized: state.app.initialized})

export default compose<ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>(mapStateToProps, {
        initializeApp
    }),
)(App);
