import React from 'react';
import s from "./MyPosts.module.css"
import Posts from "./Posts/Posts";
import {StateType} from "../../../redux/store";
import MyPostContainer from "./Post/MyPostContainer";


type PropsType = {
    state: StateType
}

const MyPosts: React.FC<PropsType> = (props) => {
    return (
        <div className={s.post}>
            <MyPostContainer />
            <Posts postsData={props.state.postsData}/>
        </div>
    );
}

export default MyPosts;
