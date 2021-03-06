import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";
import {DialogsDataType} from "../../redux/dialogs-reducer";

type PropsType = {
    dialogsData: DialogsDataType,
    updateNewMessageText: (text: string) => void
    addMessage: () => void
}

const Dialogs: React.FC<PropsType> = (props) => {

    const dialogElements = props.dialogsData.dialogs.map(d => <Dialog id={d.id} name={d.name}/>);
    const messagesElements = props.dialogsData.message.messageItem.map(m => <Messages id={m.id} message={m.message}/>)

    let newMessageElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

    let addMessage = () => {
        if (newMessageElement.current) {
            props.addMessage()
        }
    }
    let newMessageChange = () => {
        if (newMessageElement.current) {
            let text = newMessageElement.current.value
            props.updateNewMessageText(text)
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