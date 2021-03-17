import React from 'react';
import { PostsDataType } from '../../redux/profile-reducer';
import Description from "./Description/Description";
import MyPosts from "./MyPosts/MyPosts";


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
