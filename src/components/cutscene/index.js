import React from 'react';
import style from './style.module.scss';
import caretaker from './Caretaker_1b.png';


const Cutscene = () => {
    return (
        <div className={style.animatedIntro}>
            <img id={style.caretaker} src={caretaker} alt="A mysterious hooded alien holding an orb engulfed in flames"/>
        </div>
    )
}

export default Cutscene;