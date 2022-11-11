import './App.css';
import React from "react";
import {ScrollSync, ScrollSyncPane} from "react-scroll-sync";

function App() {


    return (
        <div className="App">
            <header className="App-header">
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
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToeYXAu48Su42FeUe7sMTM77sms28MzbUuGg&usqp=CAU"/>

                                        </div>
                                    </div>
                                    <div className={'innerPic'}>
                                        <div className={'imgSection'}>

                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtC7GF3PrlQ070iZ2wf9-bjDbhR_JpXGOMerBbs7-xDrQm7Z_gm_wVzID3uw94qebnIsA&usqp=CAU"/>

                                        </div>
                                    </div>
                                    <div className={'innerPic'}>
                                        <div className={'imgSection'}>

                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUjTZvZG2sYFUjGFYfCquZRdt6KKdpaPnihpMs-LhH0vZCoKXh8P8dNNlhbpCgFj-Biro&usqp=CAU"/>

                                        </div>
                                    </div>
                                </div>
                            </ScrollSyncPane>
                        </div>
                    </ScrollSync>


                    {/*<ScrollSync>*/}
                    {/*    <div style={{display: 'flex', position: 'relative', height: "100vh"}}>*/}
                    {/*        <ScrollSyncPane>*/}
                    {/*            <div style={{overflow: 'auto'}}>*/}
                    {/*                <section style={{height: 1000}}>*/}

                    {/*                        <div className={'main'} style={{background: 'green'}}>main</div>*/}
                    {/*                        <div className={'main'} style={{background: 'yellow'}}>main</div>*/}
                    {/*                        <div className={'main'} style={{background: 'red'}}>main</div>*/}

                    {/*                </section>*/}
                    {/*            </div>*/}
                    {/*        </ScrollSyncPane>*/}

                    {/*        <ScrollSyncPane>*/}
                    {/*            <div style={{overflow: 'auto'}}>*/}
                    {/*                <section style={{height: '100vh'}}>*/}


                    {/*                </section>*/}

                    {/*            </div>*/}
                    {/*        </ScrollSyncPane>*/}
                    {/*    </div>*/}
                    {/*</ScrollSync>*/}
                    <footer className="footer">footer</footer>
                </div>

            </header>
        </div>
    )
}

export default App;
