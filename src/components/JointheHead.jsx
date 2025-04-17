import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const JointheHead = () => {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.3,
    })

    useEffect(() => {
        if (inView) {
            controls.start({
                x: 0,
                opacity: 1,
                transition: { duration: 1, ease: 'easeOut' },
            })
        } else {
            controls.start({
                x: 300, // Go right from current position
                opacity: 0,
                transition: { duration: 0.8, ease: 'easeInOut' },
            })
        }
    }, [inView, controls])

    return (
        <React.Fragment>
            <div className="container-fluid home-section5 d-flex justify-content-center">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-md-2 order-sm-2 d-flex align-items-center px-5">
                        <div className='px-lg-5 px-md-5 px-sm-0 px-0'>
                            <div className="title">JOIN THE HERD</div>
                            <div className="para">
                                WELCOME TO THE HERD. AN EXCLUSIVE COMMUNITY OF DIAMOND HOOVED HOLDERS. VALUE BROUGHT FROM EVERY AVENUE AND NONSTOP GROWTH WITHIN. WE ARE HERE TO BE THE GREATEST WE CAN POSSIBLY BE, AND PUSH THE LIMITS OF WEB3 DEVELOPMENT. ITS THE YEAR OF THE PANDAS, HOP IN!
                            </div>
                            <div className="social-icon">
                                <a href="" target="_blank">
                                    <img className='rotate-logo img-fluid' src="assets/images/Discord.c4e3d10f72d4ec200831.png" alt="" /></a>
                                <a href="" target="_blank">
                                    <img className='img-fluid' src="assets/images/Twitter.02717e6d6b5296a1ca7d.png" alt="" /></a>
                                <a href="" target="_blank">
                                    <img className='img-fluid' src="assets/images/Opensea.3e7ae5c98b24afcd2891.png" alt="" /></a>
                                <a href="" target="_blank">
                                    <img className='img-fluid' src="assets/images/Instagram.b72da3344d46f4f8af3d.png" alt="" /></a>
                                <a href="/" target="_blank">
                                    <img className='img-fluid' src="assets/images/Rarity Sniper.8e5fe7f1495a0dedc485.png" alt="" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-md-1 order-sm-1 d-flex justify-content-center">
                        <motion.img
                            ref={ref}
                            className="img-fluid top p-lg-5 p-md-3 p-sm-0 p-0"
                            src="assets/images/mojo1.png"
                            alt=""
                            initial={{ x: 300, opacity: 0 }}
                            animate={controls}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default JointheHead
