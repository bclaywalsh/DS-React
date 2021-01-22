import React from 'react';
import style from './style.module.scss';

const BGBorder = () => {
    
    return (
        <div className={style.viewBorders}>
            <div className={style.viewBorderTop}></div>
            <div className={style.viewBorderBottom}></div>
        </div>
    )
}

export default BGBorder;

