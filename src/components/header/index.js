import React from 'react';
import style from './style.module.scss';


const Header = () => {
    return (
        <div className="header">
            {/* <img  className="header-back" href=""/> */}
            <div className={style.backPanel1}></div>
            <div className={style.backPanel2}></div>

            <div className={style.hamburger1}></div>
            <div className={style.mobileScreen1}></div>

            <div className={style.hamburger2}></div>
            <div className={style.mobileScreen2}></div>

        </div>
    )
}

export default Header;