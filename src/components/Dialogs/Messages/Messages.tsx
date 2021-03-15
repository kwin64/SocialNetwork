import React from "react";
import s from './Messages.module.css'
import {MessageItem} from "../../../redux/redux-store";


const Messages: React.FC<MessageItem> = (props) => {

    return (
        <div className={s.messages}>
            {/*{props.id}*/}{props.message}
        </div>
    )
}
export default Messages;