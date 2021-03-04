import React from 'react';
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Header from './components/Header/Header';
import './App.css'
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from "./components/Music/Music";
import {StateType} from "./redux/store";

type PropsType = {
    state: StateType,
    dispatch: any
}


const App: React.FC<PropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className={'appWrapper'}>
                <Header/>
                <Sidebar sidebarData={props.state.sidebarData}/>
                <div className={'appWrapperContent'}>
                    <Route path='/Dialogs' render={() => <Dialogs dialogsData={props.state.dialogsData}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path='/Profile' render={() => <Profile postsData={props.state.postsData}
                                                                  dispatch={props.dispatch}
                    />}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/Settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
