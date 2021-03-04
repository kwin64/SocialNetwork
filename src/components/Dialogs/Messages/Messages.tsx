import React from "react";
import s from './Messages.module.css'
import {MessagesItemType} from "../../../redux/store";


const Messages: React.FC<MessagesItemType> = (props) => {

    return (
        <div className={s.messages}>
            {/*{props.id}*/}{props.message}
        </div>
    )
}
export default Messages;