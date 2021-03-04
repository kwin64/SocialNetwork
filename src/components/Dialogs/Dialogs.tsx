import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";
import { DialogDataType } from "../../redux/store";
import {addMessageActionCreator, newMessageChangeActionCreator} from "../../redux/dialogs-reducer";


type PropsType = {
    dialogsData: DialogDataType,
    dispatch: any,
}


const Dialogs: React.FC<PropsType> = (props) => {
    const dialogElements = props.dialogsData.dialogs.dialogsItem.map(d => <Dialog id={d.id} name={d.name}/>);
    const messagesElements = props.dialogsData.message.messagesItem.map(m => <Messages id={m.id} message={m.message}/>)

    let newMessageElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

    let addMessage = () => {
        if (newMessageElement.current){
            props.dispatch(addMessageActionCreator())
        }
    }

    let newMessageChange = () => {

        if (newMessageElement.current){
            let text = newMessageElement.current.value
            props.dispatch(newMessageChangeActionCreator(text))
        }
    }

    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessageElement}
                              onChange={newMessageChange}
                              value={props.dialogsData.message.newMessage}/>
                    <button onClick={addMessage}> Send message</button>
                </div>

            </div>
        </div>
    )
}
export default Dialogs;