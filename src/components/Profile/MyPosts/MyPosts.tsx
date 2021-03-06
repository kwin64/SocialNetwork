import React from 'react';
import s from "./MyPosts.module.css"
import Posts from "./Posts/Posts";
import Post from "./Post/Post";
import {ActionsType, PostsDataType} from "../../../redux/store";


type PropsType = {
    postsData: PostsDataType,
    dispatch: (action: ActionsType) => void
}

const MyPosts: React.FC<PropsType> = (props) => {
    return (
        <div className={s.post}>
            <Post dispatch={props.dispatch}
                  postsData={props.postsData}/>
            <Posts postsData={props.postsData}/>
        </div>
    );
}

export default MyPosts;
