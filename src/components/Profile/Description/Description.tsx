import React from 'react';
import s from "./Description.module.css"

const Description = () => {
    return (
            <div className={s.profile}>
                <div>
                    <img src={'https://memepedia.ru/wp-content/uploads/2018/07/150412976013508192.jpg'}/>
                </div>
                <div className={s.info}>
                    <li>Full name: Yaschcenko Eugene</li>
                    <li>Age: 25</li>
                    <li>Current city: Minsk</li>
                    <li>Web site: idhfiohdfo</li>
                </div>
            </div>
    )
}

export default Description;
