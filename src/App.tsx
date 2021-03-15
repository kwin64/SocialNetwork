import React from 'react';
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Header from './components/Header/Header';
import './App.css'
import {Route} from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from "./components/Music/Music";
import DialogContainer from "./components/Dialogs/DialogsContainer";
import {Store} from "redux";
import Users from './components/Users/Users';
import UsersContainer from "./components/Users/UsersContainer";

type PropsType = {
    store: Store
}

const App: React.FC<PropsType> = (props) => {
    return (
        <div className={'appWrapper'}>
            <Header/>
            <Sidebar sidebarData={props.store.getState().sidebarData}/>
            <div className={'appWrapperContent'}>
                <Route path='/Dialogs' render={() => <DialogContainer />}/>
                <Route path='/Profile' render={() => <Profile state={props.store.getState()}/>}/>
                <Route path='/Users' render={() => <UsersContainer />}/>
                <Route path='/Music' component={Music}/>
                <Route path='/Settings' component={Settings}/>
            </div>
        </div>
    )
}

export default App;
