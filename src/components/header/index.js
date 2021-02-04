import React from 'react';
import generalStyle from './style.module.scss';
import dsPanel1 from './ds-react-panel1.png';
import dsPanel2 from './ds-react-art2.png';
import greenOff from './greenOff.png';
import greenOn from './greenOn.png';
import { useState } from 'react';
import ToggleNavBar from './toggleNavBar.js';
//import { Link } from 'react-router-dom';
import redOff from './redOff.png';
import redOn from './redOn.png';
import { render } from '@testing-library/react';


const Header = () => {
    
    // ToggleNavBar();
    const [isNavOpen, setNav] = useState(true), 
    buttonText = isNavOpen ? 'Close Nav' : 'Open Nav';
    const linksDivOpen = {
        transform: 'rotate(0deg)',
        padding: '2rem',
        //margin: '1rem',
        position: 'fixed',
        zIndex: '99',
        left: '0',
        top: '254px',
        color: 'white',
        //backgroundColor: 'rgba(0, 97, 114, 0.65)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: '2rem',
        fontWeight: '600',
        transition: '1s',
        transformOrigin: '-1rem -1rem'
    }
    const linksDivClosed = {
        transform: 'rotate(90deg)',
        padding: '2rem',
        //margin: '1rem',
        position: 'fixed',
        zIndex: '99',
        left: '0',
        top: '254px',
        color: 'white',
        //backgroundColor: 'rgba(0, 97, 114, 0.65)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: '2rem',
        fontWeight: '600',
        transition: '1s',
        transformOrigin: '-1rem -1rem'
    }
    // const linksPanel = document.getElementsByClassName("linksPanelGroup");
    const linksPanel = () => {
        return (
            <div style={isNavOpen ? linksDivClosed:linksDivOpen} className={generalStyle.linksPanelGroup}>
                <img className={generalStyle.panel2} src={dsPanel2} alt="Machine Panel" />
                <ol className={generalStyle.textgroup1}>

                    <a href="/">Home</a>
                    <a href="/backstory">Then</a>
                    <a href="/presentDay">Now</a>
                    <a href="/gameplay">Gameplay</a>
                    <a href="/armory">Armory</a>
                    <a href="/gallery">Gallery</a>
                </ol>
            </div>
        )
    }
    // const renderNavItems = () => ()
        // linksPanel.style.transform = "rotate(0deg)")
        // greenOff = './redOff.png';
        // greenOn = './redOn.png';
        // <div className={style.linksPanelGroup}>
        //     <img className={style.buttonsPanel} src={dsPanel1} alt="Derelict Star (logo)" />
        //     <a href="/">Home</a>
        //     <a href="/backstory">Then</a>
        //     <a href="/presentDay">Now</a>
        //     <a href="/gameplay">Gameplay</a>
        //     <a href="/armory">Armory</a>
        //     <a href="/gallery">Gallery</a>
        // </div>
    // )

    return (
        <div className={generalStyle.header}>
            <div className={generalStyle.panelGroup}>
                <img className={generalStyle.panel} src={dsPanel1} alt="Machine Panel" />
                <p className={generalStyle.digitalText}>□  ACCESSING INTERNAL DATABASE . . .</p>
                <img className={generalStyle.lightButtonOff} src={isNavOpen ? greenOff:redOff} alt="A dark glass button" />
                <img src={isNavOpen ? greenOn:redOn} alt="A lit button"  className={generalStyle.lightButtonOn} 
                onClick={() => {
                    setNav(!isNavOpen)}
                    }  >
                </img>
                {/* {isNavOpen && renderNavItems()} */}
                {linksPanel()}
                {/* <div className={style.linksPanelGroup}>
                    <a href="/">Home</a>
                    <a href="/backstory">Then</a>
                    <a href="/presentDay">Now</a>
                    <a href="/gameplay">Gameplay</a>
                    <a href="/armory">Armory</a>
                    <a href="/gallery">Gallery</a>
                </div> */}
            </div>
        </div>
    )
}

export default Header;