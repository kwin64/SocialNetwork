import React from 'react';
import s from './Users.module.css'
import axios from 'axios';
import {OneUserData} from '../../redux/users-reducer';

type PropsType = {
    userData: Array<OneUserData>
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<OneUserData>) => void
}

const Users: React.FC<PropsType> = (props) => {

    const getUsers = () => {
        if (props.userData.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response: any) => {
                props.setUsers(response.data.items)
            })
        }
    }

    return (
        <div className={s.container}>
            <button onClick={getUsers}></button>
            {props.userData.map(u => <div key={u.id}>
                <div className={s.oneUser}>
                    <div className={s.areaUser}>
                        <div>
                            <img className={s.avatar} src={u.photos.small !== null ? u.photos.small : ''}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button className={s.button}
                                          onClick={() => {
                                              props.unFollow(u.id)
                                          }}
                                >Unfollow</button>
                                : <button className={s.button}
                                          onClick={() => {
                                              props.follow(u.id)
                                          }}
                                >Follow</button>}
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
