import React from 'react';
import s from "./MyPosts.module.css"
import Posts from "./Posts/Posts";
import {ActionsType, PostsDataType, StateType} from "../../../redux/store";
import MyPostContainer from "./Post/MyPostContainer";


type PropsType = {
    store: StateType
    dispatch: (action: ActionsType) => void
}

const MyPosts: React.FC<PropsType> = (props) => {
    return (
        <div className={s.post}>
            <MyPostContainer store={props.store}
                             dispatch={props.dispatch}/>
            <Posts postsData={props.store.postsData}/>
        </div>
    );
}

export default MyPosts;
