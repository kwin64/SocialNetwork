import React from 'react';
import Description from "./Description/Description";
import MyPosts from "./MyPosts/MyPosts";
import {ActionsType, PostsDataType, StateType} from "../../redux/store";


type PropsType = {
    store: StateType
    dispatch: (action: ActionsType) => void

}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <Description/>
            <MyPosts store={props.store}
                     dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;
