import React, { useState } from 'react'
import Slider from "react-slick";


import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Utilities = () => {
    const images = [

        { "image": "assets/images/cc1.png", "message": "PIRATES NFT WORLDS METAVERSE" },
        { "image": "assets/images/cc2.png", "message": "BARBIES NFT WORLDS METAVERSE" },
        { "image": "assets/images/cc3.png", "message": "CHEMICAL RESEARCH NFT LAB" },
        { "image": "assets/images/cc4.png", "message": "DETECTOR NFT METAVERSE" },
        { "image": "assets/images/cc5.png", "message": "DANCE CLUB NFT" },
        { "image": "assets/images/cc6.png", "message": "RACING NFT CHALLENGE" },

    ]
    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next " onClick={onClick}>
                <img src="assets/images/right.png" />
            </div>
        );
    };
    const [imageIndex, setImageIndex] = useState(0);
    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <img src="assets/images/left.png" />
            </div>
        );
    };
    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 5,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
        responsive: [
            {
                breakpoint: 320,
                settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false }
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false }
            }
        ]

    };
    return (
        <React.Fragment>
            <div className="container-fluid home-section3 ">
                <div className="row utilities2bg d-flex justify-content-center ">
                    <div className="col-lg-12 ">
                        <div className="line pt-5"><div className="borderr"></div></div>
                        <div className="main-title"><span>UTILITIES</span></div>
                    </div>
                    <div className="col-12 p-5 ">
                        <Slider {...settings} className="px-5">
                            {images.map((img, idx) => (
                                <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"} >
                                    <div className='slick-class'>

                                        <div className="card p-1">
                                            <img className='img-fluid' src={img.image} alt={img} />

                                            <div className=" l-height py-2">
                                                <span className="card-title py-2 card-main-text">{img.message}</span>

                                                <div className="form-check pt-1 card-complete-text">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                    <label className="form-check-label pt-1 " htmlFor="flexCheckChecked">
                                                        COMPLETE
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            ))}
                        </Slider>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Utilities