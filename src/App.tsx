import React from 'react';
import './App.css'
import {Route} from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from "./components/Music/Music";
import DialogContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from "./components/Header/HeaderContainer";

const App: React.FC = () => {
    return (
        <div className={'appWrapper'}>
            <HeaderContainer/>
            <SidebarContainer/>
            <div className={'appWrapperContent'}>
                <Route path='/Dialogs' render={() => <DialogContainer/>}/>
                <Route path='/Profile/:userId?' render={() => <ProfileContainer />}/>
                <Route path='/Users' render={() => <UsersContainer/>}/>
                <Route path='/Music' component={Music}/>
                <Route path='/Settings' component={Settings}/>
            </div>
        </div>
    )
}

export default App;
