import React from 'react';
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Header from './components/Header/Header';
import './App.css'
import {Route} from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from "./components/Music/Music";
import DialogContainer from "./components/Dialogs/DialogsContainer";
import {StateType} from "./redux/store";

type PropsType = {
    state: StateType
}

const App: React.FC<PropsType> = (props) => {
    return (
        <div className={'appWrapper'}>
            <Header/>
            <Sidebar sidebarData={props.state.sidebarData}/>
            <div className={'appWrapperContent'}>
                <Route path='/Dialogs' render={() => <DialogContainer />}/>
                <Route path='/Profile' render={() => <Profile state={props.state}/>}/>
                <Route path='/Music' component={Music}/>
                <Route path='/Settings' component={Settings}/>
            </div>
        </div>
    )
}

export default App;
