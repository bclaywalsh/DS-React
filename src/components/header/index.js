import React from 'react';
import style from './style.module.scss';
import dsPanel1 from './ds-react-panel1.png';
import greenOff from './greenOff.png';
import greenOn from './greenOn.png';
import ToggleNavBar from './toggleNavBar.js';
//import { Link } from 'react-router-dom';
import redOff from './redOff.png';
import redOn from './redOn.png';

const Header = () => {
    
    ToggleNavBar();

    return (
        <div className={style.header}>
            <div className={style.viewBorders}>
                <div className={style.viewBorderTop}></div>
                <div className={style.viewBorderBottom}></div>
            </div>
            <div className={style.panelGroup}>
                <img className={style.panel} src={dsPanel1} alt="Derelict Star (logo)" />
                <p className={style.digitalText}>□ ACCESSING INTERNAL DATABASE . . .</p>
                <img className={style.lightButtonOff} src={greenOff} alt="A dark glass button" />
                <img className={style.lightButtonOn} src={greenOn} alt="A lit up button" />
            </div>
            <div className={style.linksPanelGroup}>
                {/* <img className={style.buttonsPanel} src={dsPanel1} alt="Derelict Star (logo)" /> */}
                <a href="/backstory">Then</a>
                <a href="/backstory">Now</a>
                <a href="/backstory">Gameplay</a>
                <a href="/backstory">Gear</a>
                <a href="/backstory">Gallery</a>

            </div>
            <div className={style.navBar}>
                <a href="/backstory">Contact</a>
                <a href="/backstory">Gameplay</a>
                <a href="/backstory">Gallery</a>
            </div>
        </div>
    )
}

export default Header;