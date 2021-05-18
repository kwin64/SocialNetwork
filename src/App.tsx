import React from 'react';
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
import {getAuthUsersData} from "./redux/auth-reducer";

type MapDispatchPropsType = {
    getAuthUsersData: () => void
}
type OwnPropsType = {}
type MapStatePropsType = {}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


class App extends React.Component<PropsType> {
    componentDidMount(): void {
        this.props.getAuthUsersData()
    }

    render() {
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

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>
(null, {
    getAuthUsersData
})(App);
