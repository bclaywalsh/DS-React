import React from 'react';
import { Link } from 'react-router-dom';
import caretaker from './Caretaker_1b.png';
import dsLogo from './DerelictStarBlue4.png';
import bgImage from './ATMA_TitleRainbow.png';
import style from './style.module.scss';

const HomeScreen = () => {
    return (
        <div className={style.body}>
            <div className={style.bgGroup}>
                <img className={style.bgImage} src={bgImage} alt="A planet in front of a star, surrounded by rainbow light" />
                <div className={style.viewBorderTop}></div>
                <div className={style.viewBorderBottom}></div>
            </div>
            <img className={style.derelictStar} src={dsLogo} alt="Derelict Star (logo)" />
            <h3>A world in the making</h3>
            <p className="scrolling-text" >Derelict Star is a side-scrolling Metroidvania set on a crumbling world
                at the edge of the galaxy. Set in a year so far removed from our own that 
                our calendars hold no meaning, players will assume the roll of the Azema, the
                last human being in the galaxy. <br></br></p>
            <Link to="/backstory">Backstory</Link>
            <div className={style.animatedIntro}>
                <img id={style.caretaker} src={caretaker} alt="A mysterious hooded alien holding an orb engulfed in flames"/>
            </div>

        </div>
    )
}

export default HomeScreen;