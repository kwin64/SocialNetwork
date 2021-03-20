import React from 'react';
import {OnePostItem} from '../../redux/profile-reducer';
import Description from "./Description/Description";
import MyPosts from "./MyPosts/MyPosts";


type PropsType = {
    postsData: Array<OnePostItem>
    profile: null | string
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <Description profile={props.profile}/>
            <MyPosts postsData={props.postsData}/>
        </div>
    );
}

export default Profile;
