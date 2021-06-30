import React from 'react';
import s from "./MyPosts.module.css"
import Posts from "./Posts/Posts";
import MyPostContainer from "./Post/MyPostContainer";
import {OnePostItem} from "../../../redux/profile-reducer";


type PropsType = {
    postsData: Array<OnePostItem>
}

const MyPosts: React.FC<PropsType> = React.memo((props) => {
        console.log('render')

        return (

            <div className={s.post}>
                <MyPostContainer/>
                <Posts postsData={props.postsData}/>
            </div>
        );
    }
)

export default MyPosts;
