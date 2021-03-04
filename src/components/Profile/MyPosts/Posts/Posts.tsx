import React from 'react';
import s from "./Posts.module.css"
import OnePost from "./OnePost/OnePost";
import {PostsDataType} from "../../../../redux/store";


type PropsType = {
    postsData:PostsDataType
}

const Posts: React.FC <PropsType> = (props) => {
    const onePostElements = props.postsData.postsItem.map (p => <OnePost id={p.id}
                                                                         avatar={p.avatar}
                                                                         count={p.count}
                                                                         post={p.post}
                                                                         logoCountLikes={p.logoCountLikes}/>)
    return (
        <div className={s.posts}>
            {onePostElements}
        </div>
    );
}

export default Posts;
