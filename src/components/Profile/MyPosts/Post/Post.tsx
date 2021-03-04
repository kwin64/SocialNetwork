import React from 'react';
import s from "./Post.module.css"
import {PostsDataType} from "../../../../redux/store";
import {addPostActionCreator, updateNewPostChangeActionCreator} from "../../../../redux/profile-reducer";

type PropsType = {
    postsData: PostsDataType,
    dispatch: any
}

const Post: React.FC<PropsType> = (props) => {
    let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

    let AddPost = () => {
        if (newPostElement.current) {
            props.dispatch(addPostActionCreator())
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.dispatch(updateNewPostChangeActionCreator(text))
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
