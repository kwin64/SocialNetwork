import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";
import {InitialDialogsDataType} from "../../redux/dialogs-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type PropsType = {
    dialogsItem: InitialDialogsDataType
    addMessage: (newMessageBody: string) => void
}
type FormDataType = {
    newMessageBody: string
}
type IProps = {
    addMessage: (newMessageBody: string) => void
    dialogsItem: InitialDialogsDataType
}

const Dialogs: React.FC<PropsType> = (props) => {

    const dialogElements = props.dialogsItem.dialogs.map(d => <Dialog id={d.id} name={d.name}/>);
    const messagesElements = props.dialogsItem.message.messageItem.map(m => <Messages id={m.id} message={m.message}/>)

    const onSubmit = (values: InjectedFormProps<FormDataType> & IProps & any) => {
        props.addMessage(values.newMessageBody)
    }

    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType> & IProps & any> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea'
                       name='newMessageBody'
                       placeholder='Enter your message'
                />
                <button>Send message</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm<InjectedFormProps<FormDataType> & IProps>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;