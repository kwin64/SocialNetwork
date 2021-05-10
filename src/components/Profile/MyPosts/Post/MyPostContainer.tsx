import React from 'react';
import Post from "./Post";
import {connect} from "react-redux";
import {
    ActionsProfileType,
    addPostActionCreator,
} from "../../../../redux/profile-reducer";
import {StateType} from "../../../../redux/redux-store";
import {Dispatch} from 'redux';

let mapStateToProps = (state: StateType) => {
    return {}
}
let mapDispatchToProps = (dispatch: Dispatch<ActionsProfileType>) => {
    return {
        addPost: (newPostBody: string) => {
            dispatch(addPostActionCreator(newPostBody))
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);

export default MyPostContainer;
