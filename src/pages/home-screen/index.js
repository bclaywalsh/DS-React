import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.scss';

const HomeScreen = () => {
    return (
        <div className="body">
            <h1 className="logo">DERELICT STAR</h1>
            <h3>A world in the making</h3>
            <p class="scrolling-text" >Derelict Star is a side-scrolling Metroidvania set on a crumbling world 
                at the edge of the galaxy. Set in a year so far removed from our own that 
                our calendars hold no meaning, players will assume the roll of Azema, the 
                - presumably - last human being in the galaxy. <br></br></p>
            <Link to="/backstory">Backstory</Link>

        </div>
    )
}

export default HomeScreen;