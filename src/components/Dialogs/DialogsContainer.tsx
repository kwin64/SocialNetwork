import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessageActionCreator, newMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import {StateType} from "../../redux/redux-store";

let mapStateToProps = (state: StateType) => {
    return {
        dialogsData: state.dialogsData
    }
}
let mapDispatchToProps = (dispatch: (arg0: { type: string; newMessage?: string; }) => void ) => {//????
    return {
        updateNewMessageText: (text: string)=> {
            dispatch(newMessageChangeActionCreator(text))
        },
        addMessage: ()=> {
            dispatch(addMessageActionCreator())
        }
    }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogContainer;