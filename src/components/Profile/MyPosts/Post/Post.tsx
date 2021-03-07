import React from 'react';
import s from "./Post.module.css"
import {ActionsType, PostsDataType} from "../../../../redux/store";
import {addPostActionCreator, updateNewPostChangeActionCreator} from "../../../../redux/profile-reducer";

type PropsType = {
    postsData: PostsDataType,
    dispatch: (action: ActionsType) => void
}

const Post: React.FC<PropsType> = (props) => {
    let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

    let AddPost = () => {
        if (newPostElement.current) {
            // props.dispatch(addPostActionCreator())
            props.dispatch({type:"ADD-POST",newPostText: props.postsData.newPostText})
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            // props.dispatch(updateNewPostChangeActionCreator(text))
            props.dispatch({type:"UPDATE-NEW-POST-TEXT", newPostText:text})
        }
    }

    return (
        <div className={s.post}>My posts
            <div className={s.textarea}>
                <textarea ref={newPostElement}
                          onChange={onPostChange}
                          value={props.postsData.newPostText}/>
                <button onClick={AddPost}>Add post</button>
            </div>
        </div>
    );
}

export default Post;
