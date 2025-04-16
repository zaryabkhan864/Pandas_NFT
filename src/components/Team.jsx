import React, { useEffect } from 'react'

import 'aos/dist/aos.css';
import Aos from 'aos';
const Team = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <>

            <div className="container-fluid home-section4 d-flex justify-content-center">
                <div className="row ">
                    <div className="col-lg-12 pt-5 my-5 ">
                        <div className="line">
                            <div className="borderr">
                            </div>
                        </div>
                        <div className="main-title">
                            <span>TEAM</span>
                        </div>
                    </div>

                    <div className="col-lg-4 aos-animate  p-lg-0 p-md-2 p-sm-2 p-2" data-aos="fade-up">
                        <div className="team-card h-100 px-0 w-sm-75 ">
                            <div className="card-header text-sm-center text-xs-center px-lg-3 px-md-2 px-sm-1 px-0">
                                <img src="assets/images/PandaBlossom1.png" className=" img-fluid w-sm-75" alt="..." />
                            </div>

                            <div className="card-body teamcarddown px-4">
                                <div className=' pb-5 px-2'>
                                    <h5 className="card-title title mt-2 ">Panda Blossom</h5>
                                    <p className="para ">An avid reader and learning enthusiast, Blockchain Buddha is experienced in both entrepreneurship and the corporate world. Having built a 7 figure design agency, BlockchainBuddha was fascinated by the cryptoverse and was eager to apply his expertise in team building, organizational workflow, and creative strategy to an NFT project. BlockchainBuddha is one of the hosts for weekly AMAs and also serves as the project’s CEO.</p>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 aos-animate p-lg-0 p-md-2 p-sm-2 p-2" data-aos="fade-up">
                        <div className="team-card h-100 w-sm-75 ">
                            <div className="card-header text-sm-center text-xs-center px-lg-3 px-md-2 px-sm-1 px-0">
                                <img src="assets/images/ButtercupPanda2.png" className=" img-fluid w-sm-75" alt="..." />
                            </div>
                            {/* Buttercup */}
                            <div className="card-body teamcarddown px-4">
                                <div className='pb-5 px-1'>
                                    <h5 className="card-title title mt-2">Buttercup Panda</h5>
                                    <p className="para ">With over 10 years of artistry under his belt, 4FUN creates every PANDAS from pen and pad before translating them into digital mediums. He draws his creativity from fashion, music, and art. After launching a few 1 of 1 NFTs of his own, he joined The PANDAS Society team to bring their vision to life.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 aos-animate p-lg-0 p-md-2 p-sm-2 p-2" data-aos="fade-up">
                        <div className="team-card h-100 w-sm-75 ">
                            <div className="card-header text-sm-center text-xs-center px-lg-3 px-md-2 px-sm-1 px-0">
                                <img src="assets/images/BubblePanda1.png" className=" img-fluid w-sm-75" alt="..." />
                            </div>

                            <div className="card-body teamcarddown px-4">
                                <div className='pb-5 px-1'>
                                    <h5 className="card-title title mt-2">Bubbles Panda</h5>
                                    <p className="para ">Visual Dope is an experienced Commercial Banker with a passion for engaging large brands at the c-suite level. He has since rugged his traditional career and background to become a full on degenerate.</p>
                                </div>
                            </div>

                        </div>
                    </div>


                    <img className='img-fluid px-0' src="assets/images/121212.png" alt="" />

                </div>
            </div>

        </>

    )
}

export default Team