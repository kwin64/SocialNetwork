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
            return {
                ...state,
                message: {
                    ...state.message,
                    messageItem: [...state.message.messageItem, {id: 4, message: action.newMessageBody}]
                }
            }
        }
        default:
            return state
    }
}


export const addMessage = (newMessageBody: string) => ({type: ADD_MESSAGE, newMessageBody} as const)

export type ActionsDialogsType = ReturnType<typeof addMessage>

export default dialogsReducer;