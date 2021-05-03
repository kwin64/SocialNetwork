import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessage, InitialDialogsDataType, newMessageChange} from "../../redux/dialogs-reducer";
import {StateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {RouteComponentProps, withRouter} from "react-router-dom";

type OwnPropsType = {}
type MapStatePropsType = {
    dialogsItem: InitialDialogsDataType
}
type MapDispatchPropsType = {
    newMessageChange: (text: string) => void
    addMessage: () => void
}
type PropsType = RouteComponentProps & MapDispatchPropsType & MapStatePropsType & OwnPropsType

class DialogsContainer extends React.Component<PropsType> {
    render() {
        return (
            <div>
                <Dialogs {...this.props}
                         dialogsItem={this.props.dialogsItem}
                         newMessageChange={this.props.newMessageChange}
                         addMessage={this.props.addMessage}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        dialogsItem: state.dialogsData
    }
}

export default withAuthRedirect(connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>(mapStateToProps, {
    newMessageChange,
    addMessage
}))(withRouter(DialogsContainer));
