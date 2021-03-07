import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";
import {ActionsType, DialogDataType} from "../../redux/store";


type PropsType = {
    dialogsData: DialogDataType,
    dispatch: (action: ActionsType) => void
}


const Dialogs: React.FC<PropsType> = (props) => {
    const dialogElements = props.dialogsData.dialogs.dialogsItem.map(d => <Dialog id={d.id} name={d.name}/>);
    const messagesElements = props.dialogsData.message.messagesItem.map(m => <Messages id={m.id} message={m.message}/>)

    let newMessageElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

    let addMessage = () => {
        if (newMessageElement.current){
            props.dispatch({type: "ADD-MESSAGE",newMessage:props.dialogsData.message.newMessage})
        }
    }

    let newMessageChange = () => {

        if (newMessageElement.current){
            let text = newMessageElement.current.value
            props.dispatch({type:"UPDATE-NEW-MESSAGE-TEXT",newMessage:text})
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