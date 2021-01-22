import React from 'react';
import style from './style.module.scss';

const Footer = () => {
    
    return (
        <div className={style.navBar}>
            <a href="/">Home</a>
            <a href="/backstory">History</a>
            <a href="/gameplay">Gameplay</a>
            <a href="/gallery">Gallery</a>
            <a href="/about">Contact</a>
        </div>
    )
}

export default Footer;