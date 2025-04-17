import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';
import { motion, useAnimation } from 'framer-motion';

const About = () => {
    const [showTyping, setShowTyping] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        Aos.init({ duration: 50000 });

        const handleScroll = () => {
            const aboutSection = document.getElementById('about-typing');
            if (aboutSection) {
                const top = aboutSection.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (top < windowHeight - 100) {
                    setShowTyping(true);
                    setIsInView(true);
                } else {
                    setIsInView(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isInView) {
            controls.start({
                x: ['-50vw', '50vw'],
                y: ['50vh', '-50vh'],
                opacity: [0, 1, 0],
                transition: { duration: 4, ease: 'easeInOut' }
            });
        }
    }, [isInView, controls]);

    return (
        <React.Fragment>
            <div className="container-fluid home-section2 position-relative overflow-hidden">
                {/* ANIMATED IMAGE */}
                <motion.img
                    src="assets/images/supermanPanda.png" // image ka path
                    alt="sugarcane"
                    className="position-absolute"
                    style={{
                        bottom: 0,
                        left: 0,
                        height: '50%',
                        zIndex: 1,
                    }}
                    animate={controls}
                    initial={{ x: '-50vw', y: '50vh', opacity: 0 }}
                />

                <div className="row home-section2bg">
                    <div className="col-lg-7 col-md-12 col-sm-12 col-12 p-0" data-aos="fade-right">
                        <div className="left aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear" data-aos-anchor-placement="top-bottom">
                            <img className='img-fluid w-75 pt-3' src="assets/images/abbg1.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 col-12 ps-5 pe-0" data-aos="fade-left">
                        <div className="wrapper">
                            <div className="line">
                                <div className="borderr"></div>
                            </div>

                            <div className="right aos-init" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="linear" data-aos-anchor-placement="top-bottom">
                                <div className="title">ABOUT US</div>
                                <div className="para" id="about-typing">
                                    {showTyping && (
                                        <TypeAnimation
                                            sequence={[
                                                `The Pandas Society is a collection of 10,000 unique NFTs designed to bring together various communities and enthusiasts of the beloved pandas - nature's most iconic creatures. This collection comprises 9,000 generative pandas and 1,000 meticulously hand-drawn pandas, with each panda being represented as an ERC-721 token on the Ethereum blockchain.

Every panda bestows a membership to our exclusive group, The Bamboo Collective, consisting of diverse investors from various backgrounds. As Bamboo Collective members, individuals gain access to a range of privileges, including exclusive participation in major events such as sports games, film awards, music festivals, conferences, and concerts.`,
                                                1000,
                                            ]}
                                            speed={50}
                                            repeat={0}
                                            style={{ whiteSpace: 'pre-line', display: 'block' }}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
