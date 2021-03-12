import React from 'react';
import Description from "./Description/Description";
import MyPosts from "./MyPosts/MyPosts";
import {StateType, StoreType} from "../../redux/store";


type PropsType = {
    state: StateType
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <Description/>
            <MyPosts state={props.state}/>
        </div>
    );
}

export default Profile;
