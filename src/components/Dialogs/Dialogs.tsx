import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";
import {InitialDialogsDataType} from "../../redux/dialogs-reducer";
import {Field, reduxForm, InjectedFormProps} from "redux-form";

type PropsType = {
    dialogsItem: InitialDialogsDataType
    newMessageChange: (text: string) => void
    addMessage: () => void
}

type FormDataType = {
    newMessageBody: string
}

type IProps = {
    addMessage: () => void
    dialogsItem: InitialDialogsDataType
    newMessageChange: (text: string) => void
}

const Dialogs: React.FC<PropsType> = (props) => {

    const dialogElements = props.dialogsItem.dialogs.map(d => <Dialog id={d.id} name={d.name}/>);
    const messagesElements = props.dialogsItem.message.messageItem.map(m => <Messages id={m.id} message={m.message}/>)

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

const AddMessageForm: React.FC<InjectedFormProps<FormDataType> & IProps> = (props) => {
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
    let newMessageElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea'
                       name='newMessageBody'
                       placeholder='Enter your message'
                       ref={newMessageElement}
                       onChange={newMessageChange}
                       value={props.dialogsItem.message.newMessage}/>
                <button onClick={addMessage}> Send message</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm<FormDataType & IProps>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;