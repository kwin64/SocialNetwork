import React from 'react';
import Post from "./Post";
import {StateType} from "../../../../redux/store";
import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostChangeActionCreator} from "../../../../redux/profile-reducer";

let mapStateToProps = (state: StateType) => {
    return {
        newPostText: state.postsData.newPostText
    }
}
let mapDispatchToProps = (dispatch: (arg0: { type: string; postMessage?: string; }) => void) => {//?????
    return {
        onPostChange: (text: string)=> {
            dispatch(updateNewPostChangeActionCreator(text))
        },
        AddPost: ()=> {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);

export default MyPostContainer;
