import React from 'react';
import style from './style.module.scss';
import dsPanel1 from './ds-react-panel1.png';
import greenOff from './greenOff.png';
import greenOn from './greenOn.png';
import { useState } from 'react';
import ToggleNavBar from './toggleNavBar.js';
//import { Link } from 'react-router-dom';
import redOff from './redOff.png';
import redOn from './redOn.png';

const Header = () => {
    
    // ToggleNavBar();
    const [isNavOpen, setNav] = useState(false), buttonText = isNavOpen ? 'Close Nav' : 'Open Nav';

    const renderNavItems = () => (
        <div className={style.linksPanelGroup}>
            {/* <img className={style.buttonsPanel} src={dsPanel1} alt="Derelict Star (logo)" /> */}
            <a href="/">Home</a>
            <a href="/backstory">Then</a>
            <a href="/presentDay">Now</a>
            <a href="/gameplay">Gameplay</a>
            <a href="/armory">Armory</a>
            <a href="/gallery">Gallery</a>
        </div>
    )

    return (
        <div className={style.header}>
            <div className={style.panelGroup}>
                <img className={style.panel} src={dsPanel1} alt="Machine Panel" />
                <p className={style.digitalText}>□  ACCESSING INTERNAL DATABASE . . .</p>
                <img className={style.lightButtonOff} src={greenOff} alt="A dark glass button" />
                {/* <img className={style.lightButtonOn} src={greenOn} alt="A lit up button" /> */}
                {/* ToggleNavBar(); */}
                <img src={greenOn} alt="A lit button"  className={style.lightButtonOn} 
                onClick={() => {
                    setNav(!isNavOpen)}
                    }  >
                </img>
                {isNavOpen && renderNavItems()}
            </div>
        </div>
    )
}

export default Header;