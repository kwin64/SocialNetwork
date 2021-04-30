import React from 'react';
import Post from "./Post";
import {connect} from "react-redux";
import {
    ActionsProfileType,
    addPostActionCreator,
    updateNewPostChangeActionCreator
} from "../../../../redux/profile-reducer";
import {StateType} from "../../../../redux/redux-store";
import {Dispatch} from 'redux';

let mapStateToProps = (state: StateType) => {
    return {
        newPostText: state.postsData.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch<ActionsProfileType>) => {
    return {
        onPostChange: (text: string) => {
            dispatch(updateNewPostChangeActionCreator(text))
        },
        AddPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);

export default MyPostContainer;
