import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";
import {ActionsType, StateType} from "../../redux/store";
import Dialogs from "./Dialogs";


type PropsType = {
    store: StateType
    dispatch: (action: ActionsType) => void
}


const DialogContainer: React.FC<PropsType> = (props) => {

    let dialogsData = props.store.dialogsData

    let addMessage = () => {
        props.dispatch({type: "ADD-MESSAGE", newMessage: props.store.dialogsData.message.newMessage})
    }
    let newMessageChange = (text: string) => {
        props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newMessage: text})
    }

    return <Dialogs dialogsData={dialogsData}
                    addMessage={addMessage}
                    updateNewMessageText={newMessageChange}/>
}
export default DialogContainer;