import React from 'react';
import Description from "./Description/Description";
import MyPosts from "./MyPosts/MyPosts";
import {StateType, StoreType} from "../../redux/store";


type PropsType = {
    store: StoreType
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <Description/>
            <MyPosts store={props.store}/>
        </div>
    );
}

export default Profile;
