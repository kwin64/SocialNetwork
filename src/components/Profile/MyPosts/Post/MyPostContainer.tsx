import React from 'react';
import Post from "./Post";
import StoreContext from "../../../../StoreContext";

// type PropsType = {
//     store: StoreType
// }

const MyPostContainer = () => {


    return (
        <StoreContext.Consumer> {
            (store) => {
                const postsData = store.getState().postsData

                let AddPost = () => {
                    store.dispatch({type: "ADD-POST", newPostText: postsData.newPostText})
                }
                let onPostChange = (text: string) => {
                    store.dispatch({type: "UPDATE-NEW-POST-TEXT", newPostText: text})
                }

                return <Post AddPost={AddPost}
                             onPostChange={onPostChange}
                             newPostText={postsData.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    );
}

export default MyPostContainer;
