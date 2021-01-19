import React from 'react';
import style from './style.module.scss';
import dsPanel1 from './ds-react-panel1.png';
import greenOff from './greenOff.png';
import greenOn from './greenOn.png';
import redOff from './redOff.png';
import redOn from './redOn.png';



const Header = () => {
    return (
        <div className="header">
            {/* <img  className="header-back" href=""/> */}
            <img className={style.panel} src={dsPanel1} alt="Derelict Star (logo)" />
            <img className={style.lightButton} src={greenOff} alt="Derelict Star (logo)" />
            <img className={style.lightButton} src={greenOn} alt="Derelict Star (logo)" />
            <img className={style.lightButton} src={redOff} alt="Derelict Star (logo)" />
            <img className={style.lightButton} src={redOn} alt="Derelict Star (logo)" />

            <div className={style.backPanel2}></div>

            <div className={style.hamburger1}></div>
            <div className={style.mobileScreen1}></div>

            <div className={style.hamburger2}></div>
            <div className={style.mobileScreen2}></div>

        </div>
    )
}

export default Header;