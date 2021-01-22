import React from 'react';
import { Link } from 'react-router-dom';
import caretaker from './Caretaker_1b.png';
import dsLogo from './DerelictStarBlue4.png';
import bgImage from './ATMA_TitleRainbow_FULL.png';
import style from './style.module.scss';
import carrier from './Carrier2.png';

const HomeScreen = () => {
    return (
        <div className={style.body}>
            <div className={style.bgGroup}>
                <img className={style.bgImage} src={bgImage} alt="A planet in front of a star, surrounded by rainbow light" />
                <img className={style.carrier} src={carrier} alt="A large red space ship" />
            </div>
            <div className={style.centeredStuff}>
                <img className={style.derelictStar} src={dsLogo} alt="Derelict Star (logo)" />
                <h3 className={style.flavorText}>A world on the edge of destruction<br></br>guards a precious secret deep within</h3>
                <p className={style.scrollingText} >Derelict Star is a side-scrolling Metroidvania set on a crumbling world
                    at the edge of the galaxy. Set in a year so far removed from our own that 
                    our calendars hold no meaning, players will assume the roll of Azema, the
                    last human. <br></br></p>
                {/* <Link to="/backstory">Backstory</Link> */}
                {/* <div className={style.animatedIntro}>
                    <img id={style.caretaker} src={caretaker} alt="A mysterious hooded alien holding an orb engulfed in flames"/>
                </div> */}
            </div>
            

        </div>
    )
}

export default HomeScreen;