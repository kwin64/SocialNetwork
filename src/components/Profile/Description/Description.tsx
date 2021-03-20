import React from 'react';
import s from "./Description.module.css"
import Preloader from "../../common/preloader/Preloader";

type PropsType = {
    profile: any
}

const Description: React.FC<PropsType> = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    debugger
    return (
            <div className={s.profile}>
                <div>
                    <img src={props.profile.photos.large}/>
                </div>
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
