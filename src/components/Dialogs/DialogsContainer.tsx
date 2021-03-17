import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsMessageType, addMessageActionCreator, newMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import {StateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

let mapStateToProps = (state: StateType) => {
    return {
        dialogsData: state.dialogsData
    }
}
let mapDispatchToProps = (dispatch: Dispatch<ActionsMessageType>) => {
    return {
        updateNewMessageText: (text: string) => {
            dispatch(newMessageChangeActionCreator(text))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogContainer;