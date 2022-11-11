import './App.css';
import React from "react";
import {ScrollSync, ScrollSyncPane} from "react-scroll-sync";

function App() {


    return (
        <div className="App">

                <div className="container">
                    <header className="header">header</header>


                    <ScrollSync>
                        <div className={'scsy1st'}>
                            <ScrollSyncPane>
                                <div className={'mainCon'}>
                                    <div className={'text'} style={{ background: "green"}}>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                    <div className={'text'} style={{ background: "yellow"}}>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                    <div className={'text'} style={{  background: "forestgreen"}}>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>

                                    </div>

                                </div>
                            </ScrollSyncPane>

                            <ScrollSyncPane>
                                <div className={'pic'}>
                                    <div className={'innerPic'}>
                                        <div className={'imgSection'}>

                                            <img
                                                src="https://www.shutterstock.com/image-photo/cute-autumn-hygge-home-decor-600w-1812210559.jpg"/>

                                        </div>
                                    </div>
                                    <div className={'innerPic'}>
                                        <div className={'imgSection'}>

                                            <img
                                                src="https://www.shutterstock.com/image-photo/home-comfort-living-room-sofa-600w-1224606409.jpg"/>

                                        </div>
                                    </div>
                                    <div className={'innerPic'}>
                                        <div className={'imgSection'}>

                                            <img
                                                src="https://www.shutterstock.com/image-photo/herbal-therapy-traditional-medicine-homeopathy-600w-1924836548.jpg"/>

                                        </div>
                                    </div>
                                </div>
                            </ScrollSyncPane>
                        </div>
                    </ScrollSync>

                    <footer className="footer">footer</footer>
                </div>


        </div>
    )
}

export default App;
