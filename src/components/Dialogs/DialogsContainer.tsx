import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessage, InitialDialogsDataType, newMessageChange} from "../../redux/dialogs-reducer";

type StateType = {
    dialogsData: InitialDialogsDataType
}
type OwnPropsType = {}
type MapStatePropsType = {
    dialogsItem: InitialDialogsDataType
}
type MapDispatchPropsType = {
    newMessageChange: (text: string) => void
    addMessage: () => void
}
type PropsType = MapDispatchPropsType & MapStatePropsType & OwnPropsType

class DialogsContainer extends React.Component<PropsType> {
    render() {
        return (
            <div>
                <Dialogs {...this.props}
                         dialogsItem={this.props.dialogsItem}
                         newMessageChange={this.props.newMessageChange}
                         addMessage={this.props.addMessage} />
            </div>
        )
    }
}

let mapStateToProps = (state: StateType) => {
    return {
        dialogsItem: state.dialogsData
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>(mapStateToProps, {
    newMessageChange,
    addMessage
})(DialogsContainer);
