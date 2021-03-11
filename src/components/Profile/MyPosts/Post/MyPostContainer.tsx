import React from 'react';
import {ActionsType, PostsDataType, StateType} from "../../../../redux/store";
import Post from "./Post";

type PropsType = {
    store: StateType
    dispatch: (action: ActionsType) => void
}

const MyPostContainer: React.FC<PropsType> = (props) => {

    let AddPost = () => {
        props.dispatch({type: "ADD-POST", newPostText: props.store.postsData.newPostText})
    }

    let onPostChange = (text: string) => {
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newPostText: text})
    }

    return (
        <Post AddPost={AddPost}
              onPostChange={onPostChange}
              newPostText={props.store.postsData.newPostText}/>
    );
}

export default MyPostContainer;
