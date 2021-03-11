import React from "react";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


// type PropsType = {
//     store: StoreType
// }


const DialogContainer = () => {


    return (
        <StoreContext.Consumer> {
            (store) => {
                let dialogsData = store.getState().dialogsData

                let addMessage = () => {
                    store.dispatch({type: "ADD-MESSAGE", newMessage: dialogsData.message.newMessage})
                }
                let newMessageChange = (text: string) => {
                    store.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newMessage: text})
                }

                return <Dialogs dialogsData={dialogsData}
                                addMessage={addMessage}
                                updateNewMessageText={newMessageChange}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogContainer;