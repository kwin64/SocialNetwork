import React from 'react';
import s from "./Post.module.css"
import {PostsDataType} from "../../../../redux/store";

type PropsType = {
    AddPost: () => void
    onPostChange: (text: string) => void
    posts: PostsDataType
    // newPostText:string
}

const Post: React.FC<PropsType> = (props) => {
    let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

    let AddPost = () => {
        if (newPostElement.current) {
            props.AddPost()
        }
    }
    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.onPostChange(text)
        }
    }

    return (
        <div className={s.post}>My posts
            <div className={s.textarea}>
                <textarea ref={newPostElement}
                          onChange={onPostChange}
                          value={props.posts.newPostText}/>
                <button onClick={AddPost}>Add post</button>
            </div>
        </div>
    );
}

export default Post;
