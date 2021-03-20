const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

export type MessageItem = { id: number, message: string }
export type DialogItem = { id: number, name: string }

export type initialStateType = typeof initialState
let initialState = {
    dialogs: [
        {id: 1, name: 'Eugene'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Tatsiana'},
    ] as Array<DialogItem>,
    message: {
        messageItem: [
            {id: 1, message: 'message1'},
            {id: 2, message: 'message2'},
            {id: 3, message: 'message3'},
        ] as Array<MessageItem>,
        newMessage: '' as string,
    },
}

const dialogsReducer = (state: initialStateType = initialState, action: ActionsMessageType): initialStateType => {
    let stateCopy = {...state}
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            stateCopy.message.newMessage = action.newMessage
        }
            return stateCopy
        case ADD_MESSAGE: {
            let newMessage = stateCopy.message.newMessage
            stateCopy.message.newMessage = ''
            stateCopy.message.messageItem.push({id: 4, message: newMessage})
        }
            return stateCopy
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE} as const)
export const newMessageChangeActionCreator = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT,newMessage: text} as const)

export type ActionsMessageType = ReturnType<typeof addMessageActionCreator> | ReturnType<typeof newMessageChangeActionCreator>


export default dialogsReducer;