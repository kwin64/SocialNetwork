import React from "react";
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {Input} from "../common/FormsContols/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppThunk} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => AppThunk
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       name={'email'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       type='password'
                       name={'password'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field type={'checkbox'}
                       name={'rememberMe'}
                       component={Input}
                       validate={[required]}
                />
                remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login: React.FC<LoginPropsType> = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/Profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    isAuth: state.auth.isAuth
}

export default connect(mapStateToProps, {login})(Login);