import React from 'react';
import Description from "./Description/Description";
import MyPosts from "./MyPosts/MyPosts";
import {PostsDataType} from "../../redux/store";


type PropsType = {
    postsData: PostsDataType,
    dispatch: any
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <Description/>
            <MyPosts postsData={props.postsData}
                     dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;
