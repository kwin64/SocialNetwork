import React from 'react';
import s from "./Description.module.css"
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "../MyPosts/Posts/ProfileStatus";
import {ProfileTypeForPosts} from "../../../redux/profile-reducer";

type PropsType = {
    profile: null | ProfileTypeForPosts
    status: string
    updateStatus:(status: string)=> void
}

const Description: React.FC<PropsType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profile}>
            <div>
                <img src={props.profile.photos.large}/>
            </div>
            <ProfileStatus status={props.status}
                           updateStatus={props.updateStatus}
            />
            <div className={s.info}>
                <li>Full name: {props.profile.fullName}</li>
                <li>Contacts: {props.profile.contacts.facebook} </li>
                <li>Job: {props.profile.lookingForAJobDescription}</li>
                <li>Web site: {props.profile.contacts.github}</li>
            </div>
        </div>
    )
}

export default Description;
