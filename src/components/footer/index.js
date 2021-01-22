import React from 'react';
import style from './style.module.scss';

const Footer = () => {
    
    return (
        <div className={style.navBar}>
            <a href="/">Home</a>
            <a href="/backstory">Gameplay</a>
            <a href="/backstory">Gallery</a>
            <a href="/backstory">Contact</a>
        </div>
    )
}

export default Footer;