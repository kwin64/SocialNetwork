import React from "react";
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";
import {DialogsItemType} from "../../../redux/store";


const Dialog: React.FC<DialogsItemType> = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default Dialog;