import React from 'react';
import style from './style.module.scss';
import dsPanel1 from './ds-react-panel1.png';
import greenOff from './greenOff.png';
import greenOn from './greenOn.png';
//import { Link } from 'react-router-dom';
import redOff from './redOff.png';
import redOn from './redOn.png';


const button1 = document.getElementsByClassName("lightButtonOn");
const buttonsPanel = document.getElementsByClassName("buttonsPanelGroup");

button1.onclick = function() {
    if (buttonsPanel.style.transform === "rotate(90deg)") {
        buttonsPanel.style.transform = "rotate(0deg)";

    } else {
        buttonsPanel.style.transform = "rotate(90deg)";
    }
}

const Header = () => {
    

    return (
        <div className={style.header}>
            <div className={style.panelGroup}>
                <img className={style.panel} src={dsPanel1} alt="Derelict Star (logo)" />
                <img className={style.lightButtonOff} src={greenOff} alt="Derelict Star (logo)" />
                <img className={style.lightButtonOn} src={greenOn} alt="Derelict Star (logo)" />
            </div>
            <div className={style.buttonsPanelGroup}>
                {/* <img className={style.buttonsPanel} src={dsPanel1} alt="Derelict Star (logo)" /> */}
                <a href="/backstory">Then</a>
                <a href="/backstory">Now</a>
                <a href="/backstory">Gameplay</a>
                <a href="/backstory">Gear</a>
                <a href="/backstory">Gallery</a>

            </div>
        </div>
    )
}

export default Header;