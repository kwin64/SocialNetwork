import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessage, InitialDialogsDataType, newMessageChange} from "../../redux/dialogs-reducer";
import {StateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type OwnPropsType = {}
type MapStatePropsType = {
    dialogsItem: InitialDialogsDataType
    isAuth: boolean
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
                         addMessage={this.props.addMessage}
                         isAuth={this.props.isAuth}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        dialogsItem: state.dialogsData,
        isAuth: state.auth.isAuth
    }
}

const AuthRedirectComponent = withAuthRedirect(Dialogs)

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>(mapStateToProps, {
    newMessageChange,
    addMessage
})(AuthRedirectComponent);
