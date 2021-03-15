import React from 'react';
import {UserData} from "../../redux/users-reducer";

type PropsType = {
    usersData: Array<UserData>
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UserData>) => void
}

const Users: React.FC<PropsType> = (props) => {
    return (
        <div>
            {props.usersData.map(u => <div key={u.id}>)
                <span>
                <div>
                    <img src={u.avatar}/>
                </div>
                <div>
                    <button>Follow</button>
                </div>
            </span>
                <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
            </div>)
            }
        </div>
    );
}

export default Users;
