import React from 'react';
import Description from "./Description/Description";
import MyPosts from "./MyPosts/MyPosts";
import {PostsDataType} from "../../redux/redux-store";


type PropsType = {
    postsData: PostsDataType
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <Description/>
            <MyPosts postsData={props.postsData}/>
        </div>
    );
}

export default Profile;
