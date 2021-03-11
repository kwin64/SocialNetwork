import React from 'react';
import s from "./MyPosts.module.css"
import Posts from "./Posts/Posts";
import {StoreType} from "../../../redux/store";
import MyPostContainer from "./Post/MyPostContainer";


type PropsType = {
    store: StoreType
}

const MyPosts: React.FC<PropsType> = (props) => {
    return (
        <div className={s.post}>
            <MyPostContainer store={props.store}/>
            <Posts postsData={props.store.getState().postsData}/>
        </div>
    );
}

export default MyPosts;
