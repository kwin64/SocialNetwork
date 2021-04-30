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

const App: React.FC = () => {
    return (
        <div className={'appWrapper'}>
            <HeaderContainer/>
            <SidebarContainer/>
            <div className={'appWrapperContent'}>
                <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/Profile/:userId?' render={() => <ProfileContainer />}/>
                <Route path='/Users' render={() => <UsersContainer/>}/>
                <Route path='/Music' component={Music}/>
                <Route path='/Settings' component={Settings}/>
                <Route path='/Login' component={Login}/>
            </div>
        </div>
    )
}

export default App;
