import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth: boolean
    login: null | string
    logout: () => void
}

const Header: React.FC<PropsType> = (props) => {
    return (
        <div className={s.container}>
            <img src={'https://www.baqend.com/_nuxt/img/d251998.svg'}/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>login</NavLink>}
            </div>
        </div>

    );
}

export default Header;
