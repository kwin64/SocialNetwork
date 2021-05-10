import React from 'react';
import s from './FormsControls.module.css'

type PropsType = {}

// @ts-ignore
export const Textarea: React.FC<PropsType> = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + '' + (hasError ? s.error : '')}>
            <div>
                <textarea {...input}{...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}