import React from 'react';
import Navbar from './Navbar';


const Main = () => {
    return (
        <section>
            <div className="container-fluid home-Section1 position-relative">
                <div className="row">
                    <div className="col-12">
                        <Navbar />
                    </div>
                    <div className="col-12">
                        <div className="row d-flex">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="rec-a mx-auto">
                                    <img className='img-fluid' src="assets/images/brand.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12 mx-auto text-center">
                                <div className="rec-b mx-auto">
                                    <img className='img-fluid ca' src='assets/images/banner-panda1.png' alt="" />
                                </div>
                                <div className="rec-c mx-auto mt-3">
                                    {/* Replaced image with animated button */}
                                    <button className="mint-btn">MINT NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main;
