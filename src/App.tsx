import React from 'react';
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Header from './components/Header/Header';
import './App.css'
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from "./components/Music/Music";
import {ActionsType, StateType, StoreType} from "./redux/store";
import DialogContainer from "./components/Dialogs/DialogsContainer";

type PropsType = {
    // state: StateType
    // store: StoreType
    // dispatch: (action: ActionsType) => void
}


const App: React.FC<PropsType> = (props) => {
    return (
        <div className={'appWrapper'}>
            <Header/>
            <Sidebar />
            <div className={'appWrapperContent'}>
                <Route path='/Dialogs' render={() => <DialogContainer />}/>
                <Route path='/Profile' render={() => <Profile />}/>
                <Route path='/Music' component={Music}/>
                <Route path='/Settings' component={Settings}/>
            </div>
        </div>
    )
}

export default App;
