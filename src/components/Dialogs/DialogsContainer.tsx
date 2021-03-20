import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessage, InitialDialogsDataType, newMessageChange} from "../../redux/dialogs-reducer";

type StateType = {
    dialogsData: InitialDialogsDataType
}
type OwnPropsType = {}
type MapStatePropsType = {
    dialogItem: InitialDialogsDataType
}
type MapDispatchPropsType = {
    newMessageChange: (text: string) => void
    addMessage: (text: string) => void
}
type PropsType = MapDispatchPropsType & MapStatePropsType

class DialogsContainer extends React.Component<PropsType> {
    render() {
        return (
            <div>
                <Dialogs {...this.props}
                         dialogsItem={this.props.dialogItem}
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

export default connect<MapStatePropsType, MapDispatchPropsType, {}, StateType>(mapStateToProps, {
    newMessageChange,
    addMessage
})(DialogsContainer);
