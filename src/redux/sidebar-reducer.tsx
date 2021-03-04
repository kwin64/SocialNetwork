import {StateType} from "./store";

let initialState = {
    friendsList: [
        {id: 1, avatar: 'https://avatarko.ru/img/kartinka/1/zhivotnye_catmen.jpg', name: 'Tatsiana'},
        {
            id: 2,
            avatar: 'https://i.pinimg.com/originals/5b/1a/9a/5b1a9ab141ba1ade4ab06c8215059225.jpg',
            name: 'Anna'
        },
        {id: 3, avatar: 'https://avatarko.ru/img/kartinka/2/zhivotnye_kot_prikol_1767.jpg', name: 'Alex'}
    ]
}

export const sidebarReducer = (state = initialState, action:any) => {

    return state;
}

export default sidebarReducer;