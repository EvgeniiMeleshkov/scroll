import React from 'react';
import s from './Main.module.css'

const Main = () => {
    return (
        <div className="inner">
            <div className={s.main1} style={{background: 'green'}}>main</div>
            <div className={s.main2} style={{background: 'yellow'}}>main</div>
            <div className={s.main3} style={{background: 'red'}}>main</div>
        </div>
    );
};

export default Main;