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

const dialogsReducer = (state: InitialDialogsDataType = initialState, action: ActionsDialogsType): InitialDialogsDataType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {id: 4, message: state.message.newMessage}
            return {
                ...state,
                message: {
                    ...state.message,
                    messageItem: [...state.message.messageItem, newMessage]
                }
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                message: {
                    ...state.message,
                    newMessage: action.newMessage
                }
            }
        }
        default:
            return state
    }
}

export const addMessage = () => ({type: ADD_MESSAGE} as const)
export const newMessageChange = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text} as const)

export type ActionsDialogsType = ReturnType<typeof addMessage>
    | ReturnType<typeof newMessageChange>

export default dialogsReducer;