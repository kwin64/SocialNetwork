import React from 'react';
import s from './FormsControls.module.css'

type PropsType = {}

// @ts-ignore
const FormControl: React.FC<PropsType> = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + '' + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

// @ts-ignore
export const Textarea: React.FC<PropsType> = (props) => {
    // @ts-ignore
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

// @ts-ignore
export const Input: React.FC<PropsType> = (props) => {
    // @ts-ignore
    const {input, meta, child, ...restProps} = props
    return <FormControl><input {...input}{...restProps}/></FormControl>
}