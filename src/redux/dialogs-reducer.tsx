import {ActionsType, DialogDataType} from "./store";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
        dialogs: {
            dialogsItem: [
                {id: 1, name: 'Eugene'},
                {id: 2, name: 'Anna'},
                {id: 3, name: 'Alex'},
                {id: 4, name: 'Tatsiana'},
            ],
        },
        message: {
            messagesItem: [
                {id: 1, message: 'message1'},
                {id: 2, message: 'message2'},
                {id: 3, message: 'message3'},
            ],
            newMessage: '',
        },
}

export type ActionsMessageType =  ReturnType<typeof addMessageAC>| ReturnType<typeof updateNewMessageTextAC>
export const addMessageAC = (newMessage: string)  => {
    return {
        type: 'ADD-MESSAGE',
        newMessage:newMessage
    } as const
}
export const updateNewMessageTextAC = (newMessage: string)  => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessage:newMessage
    } as const
}


const dialogsReducer = (state:DialogDataType = initialState, action: ActionsType):DialogDataType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.message.newMessage
            }
            state.message.messagesItem.push(newMessage);
            state.message.newMessage = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.message.newMessage = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const newMessageChangeActionCreator = (text: string) => ({type:UPDATE_NEW_MESSAGE_TEXT, newMessage: text})

export default dialogsReducer;