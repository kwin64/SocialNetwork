import React from 'react';
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";
import {SidebarDataType} from "../../redux/store";

type PropsType = {
    sidebarData: SidebarDataType,
}

const Sidebar: React.FC<PropsType> = (props) => {
    let friendsListElements = props.sidebarData.friendsList.map(f => (<span><p>{/*f.id*/}{f.name}</p><img src={f.avatar}/></span>))
    return (
        <div className={s.container}>
            <nav className={s.nav}>
                <ul>
                    <div className={s.itemNav}>
                        <li><NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink></li>
                    </div>
                    <div className={s.itemNav}>
                        <li><NavLink to='/Dialogs' activeClassName={s.active}>Messages</NavLink></li>
                    </div>
                    <div className={s.itemNav}>
                        <li><NavLink to='/Music' activeClassName={s.active}>Music</NavLink></li>
                    </div>
                    <div className={s.itemNav}>
                        <li><NavLink to='/Settings' activeClassName={s.active}>Settings</NavLink></li>
                    </div>
                </ul>
            </nav>
            <div className={s.containerFriends}>
                <h3>Friends</h3>
                <div className={s.friends}>

                    <div className={s.friend}>
                        {friendsListElements}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
