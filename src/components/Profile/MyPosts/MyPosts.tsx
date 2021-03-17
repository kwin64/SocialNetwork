import React from 'react';
import s from "./MyPosts.module.css"
import Posts from "./Posts/Posts";
import MyPostContainer from "./Post/MyPostContainer";
import {PostsDataType} from "../../../redux/profile-reducer";


type PropsType = {
    postsData: PostsDataType
}

const MyPosts: React.FC<PropsType> = (props) => {
    return (
        <div className={s.post}>
            <MyPostContainer/>
            <Posts postsData={props.postsData}/>
        </div>
    );
}

export default MyPosts;
