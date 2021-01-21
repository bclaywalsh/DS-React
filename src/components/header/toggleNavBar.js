import { useState } from 'react';
import style from './style.module.scss';

const Nav = () => {
    const [isNavOpen, setNav] = useState(false), buttonText = isNavOpen ? 'Close Nav' : 'Open Nav';

    const renderNavItems = () => (
        <div className={style.linksPanelGroup}>
            {/* <img className={style.buttonsPanel} src={dsPanel1} alt="Derelict Star (logo)" /> */}
            <a href="/backstory">Then</a>
            <a href="/backstory">Now</a>
            <a href="/backstory">Gameplay</a>
            <a href="/backstory">Gear</a>
            <a href="/backstory">Gallery</a>
        </div>
    )

    return (
        <>
        <button onClick={() => setNav(!isNavOpen)}>
            {buttonText}
        </button>
        {isNavOpen && renderNavItems()}
        </>
    )
}

export default Nav;
// import React from 'react'
// import greenOff from './greenOff.png';
// import greenOn from './greenOn.png';
// import redOff from './redOff.png';
// import redOn from './redOn.png';

// var ToggleNavBar = function(){
    
//     let button1 = document.getElementsByClassName("lightButtonOn");
//     let button2 = document.getElementsByClassName("lightButtonOff");
//     let linksPanel = document.getElementsByClassName("linksPanelGroup");
//     button1.onclick = function() {
//         if (linksPanel.style.transform === "rotate(90deg)") {
//             linksPanel.style.transform = "rotate(0deg)";
//             button1.src = redOn;
//             button2.src = redOff;
//         } else {
//             linksPanel.style.transform = "rotate(90deg)";
//             button1.src = greenOn;
//             button2.src = greenOff;
//         }
//     }
// }

// export default ToggleNavBar;