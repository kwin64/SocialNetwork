import React, {ComponentType} from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessage, InitialDialogsDataType, } from "../../redux/dialogs-reducer";
import {StateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type OwnPropsType = {}
type MapStatePropsType = {
    dialogsItem: InitialDialogsDataType
}
type MapDispatchPropsType = {
    addMessage: (newMessageBody: string) => void
}
type PropsType = RouteComponentProps & MapDispatchPropsType & MapStatePropsType & OwnPropsType

class DialogsContainer extends React.Component<PropsType> {
    render() {
        return (
            <div>
                <Dialogs {...this.props}
                         dialogsItem={this.props.dialogsItem}
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

export default compose<ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>(mapStateToProps, {
        addMessage
    }),
    withRouter,
    withAuthRedirect
)(DialogsContainer)