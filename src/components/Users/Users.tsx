import React from "react";
import s from "./Users.module.css";
import {OneUserData} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {InitialAuthDataType} from "../../redux/auth-reducer";
import {subscribeAPI} from "../../api";

type PropsType = {
    userData: Array<OneUserData>
    pageSize: number
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    totalUsersCount: number
    onPageChanged: (pageNumber: number) => void
}


const Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.container}>
            <div>
                {pages.map(p => {
                    return <span onClick={(e) => {
                        props.onPageChanged(p)
                    }}>{p}</span>
                })}
            </div>
            {props.userData.map(u => <div key={u.id}>
                <div className={s.oneUser}>
                    <div className={s.areaUser}>
                        <div>
                            <NavLink to={'profile/' + u.id}>
                                <img className={s.avatar} src={u.photos.small !== null ? u.photos.small : ''}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button className={s.button} onClick={() => {
                                    subscribeAPI.getUnFollow(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.unFollow(u.id)
                                            }
                                        })
                                }}>Unfollow</button>
                                : <button className={s.button} onClick={() => {
                                    subscribeAPI.getFollow(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        })
                                }}>Follow</button>}
                        </div>
                    </div>
                </div>
                <div className={s.descriptionArea}>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </div>
                </div>
            </div>)
            }
        </div>
    );
}

export default Users;