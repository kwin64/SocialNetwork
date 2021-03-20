const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

export type MessageItem = { id: number, message: string }
export type DialogItem = { id: number, name: string }

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
export type InitialDialogsDataType = typeof initialState

const dialogsReducer = (state: InitialDialogsDataType = initialState, action: ActionsMessageType): InitialDialogsDataType => {
    let stateCopy = {...state}
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {id: 4, message: state.message.newMessage}
            return {
                ...state,
                dialogs: [...state.dialogs],
                message: {
                    ...state.message,
                    newMessage:''
                },
                messageItem: [...state.message.messageItem],
            }
            // let newMessage = stateCopy.message.newMessage
            // stateCopy.message.newMessage = ''
            // stateCopy.message.messageItem.push({id: 4, message: newMessage})
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            stateCopy.message.newMessage = action.newMessage
        }
        default:
            return state
    }
}

export const addMessage = () => ({type: ADD_MESSAGE} as const)
export const newMessageChange = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text} as const)

export type ActionsMessageType = ReturnType<typeof addMessage>
    | ReturnType<typeof newMessageChange>

export default dialogsReducer;