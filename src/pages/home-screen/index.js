import React from 'react';
import { Link } from 'react-router-dom';
import caretaker from './Caretaker_1b.png';
import style from './style.module.scss';

const HomeScreen = () => {
    return (
        <div className={style.body}>
            <h1 className={style.logo}>DERELICT STAR</h1>
            <h3>A world in the making</h3>
            <p className="scrolling-text" >Derelict Star is a side-scrolling Metroidvania set on a crumbling world
                at the edge of the galaxy. Set in a year so far removed from our own that 
                our calendars hold no meaning, players will assume the roll of the Azema, the
                last human being in the galaxy. <br></br></p>
            <Link to="/backstory">Backstory</Link>
            <div className="animatedIntro">
                <img id={style.caretaker} src={caretaker} alt="A mysterious hooded alien holding an orb engulfed in flames"/>
            </div>

        </div>
    )
}

export default HomeScreen;