import React from 'react';
import s from "./OnePost.module.css"
import {PostsItemType} from "../../../../../redux/store";



const OnePost: React.FC<PostsItemType> = (props) => {
    return (
        <div className={s.post}>
            <span>
                <div>{/*{props.id}*/}</div>
                <div className={s.avatar}>
                    <img src={props.avatar}/>
                </div>
                <div className={s.countLikes}>
                    <span><img src={props.logoCountLikes}/>
                                    <p>:{props.count}</p>
                    </span>
                </div>
                <h3>{props.post}</h3>
            </span>
        </div>
    );
}

export default OnePost;
