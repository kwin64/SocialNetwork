import React from 'react';
import s from "./Post.module.css"
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type PropsType = {
    addPost: (newPostBody: string) => void
}
type FormDataType = {
    newPostBody: string
}
type IProps = {
    addPost: (newPostBody: string) => void
}

const Post: React.FC<PropsType> = (props) => {

    const onAddPost = (values: InjectedFormProps<FormDataType> & IProps & any) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div className={s.post}>
            My posts
            <AddPostFormRedux onSubmit={onAddPost}/>
        </div>
    );
}

const AddPostForm: React.FC<InjectedFormProps<FormDataType> & IProps & any> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.textarea}>
                <Field component='textarea'
                       name='newPostBody'/>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddPostFormRedux = reduxForm<InjectedFormProps<FormDataType> & IProps>({form: 'addPostForProfileForm'})(AddPostForm)

export default Post;
