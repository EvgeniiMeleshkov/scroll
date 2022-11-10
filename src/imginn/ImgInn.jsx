import React from 'react';
import s from './ImgInn.module.css'

const ImgInn = () => {
    return (
        <div className={s.stC}>


            <div className={s.side} >
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToeYXAu48Su42FeUe7sMTM77sms28MzbUuGg&usqp=CAU"/>
            </div>
            <div className={s.side}><img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtC7GF3PrlQ070iZ2wf9-bjDbhR_JpXGOMerBbs7-xDrQm7Z_gm_wVzID3uw94qebnIsA&usqp=CAU"/>
            </div>
            <div className={s.side}><img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUjTZvZG2sYFUjGFYfCquZRdt6KKdpaPnihpMs-LhH0vZCoKXh8P8dNNlhbpCgFj-Biro&usqp=CAU"/>
            </div>

        </div>
    );
};

export default ImgInn;