import React from 'react'
import greenOff from './greenOff.png';
import greenOn from './greenOn.png';
import redOff from './redOff.png';
import redOn from './redOn.png';

var ToggleNavBar = function(){
    
    let button1 = document.getElementsByClassName("lightButtonOn");
    let button2 = document.getElementsByClassName("lightButtonOff");
    let linksPanel = document.getElementsByClassName("linksPanelGroup");
    button1.onclick = function() {
        if (linksPanel.style.transform === "rotate(90deg)") {
            linksPanel.style.transform = "rotate(0deg)";
            button1.src = redOn;
            button2.src = redOff;
        } else {
            linksPanel.style.transform = "rotate(90deg)";
            button1.src = greenOn;
            button2.src = greenOff;
        }
    }
}

export default ToggleNavBar;