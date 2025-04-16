import React from 'react'
import About from './About'
import Footer from './Footer'
import JointheHead from './JointheHead'
import Main from './Main'


import Team from './Team'
import Utilities from './Utilities'

const Home = () => {
  return (
    <React.Fragment>
      <Main />
      <About />
      <Utilities />
      <Team />
      <JointheHead />
      <Footer />
    </React.Fragment>
  )
}

export default Home