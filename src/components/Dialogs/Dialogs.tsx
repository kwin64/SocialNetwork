import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";
import {InitialDialogsDataType} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";

type PropsType = {
    dialogsItem: InitialDialogsDataType
    newMessageChange: (text: string) => void
    addMessage: () => void
    isAuth: boolean
}

const Dialogs: React.FC<PropsType> = (props) => {

    const dialogElements = props.dialogsItem.dialogs.map(d => <Dialog id={d.id} name={d.name}/>);
    const messagesElements = props.dialogsItem.message.messageItem.map(m => <Messages id={m.id} message={m.message}/>)

    let newMessageElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

    let addMessage = () => {
        if (newMessageElement.current) {
            props.addMessage()
        }
    }
    let newMessageChange = () => {
        if (newMessageElement.current) {
            let text = newMessageElement.current.value
            props.newMessageChange(text)
        }
    }

    if (!props.isAuth) return <Redirect to='/login'/>

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
                              value={props.dialogsItem.message.newMessage}/>
                    <button onClick={addMessage}> Send message</button>
                </div>

            </div>
        </div>
    )
}
export default Dialogs;