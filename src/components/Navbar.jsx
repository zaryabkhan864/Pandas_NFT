import React from 'react'

const Navbar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-component">
          <div className="container-fluid px-0">
            <div className="logo">
              <img className='img-fluid w-sm-25' src='assets/images/logo.png' alt="logo" />
            </div>
  
            <div className="title d-none d-sm-block">
              THE PANDAS<br /> SOCIETY™
            </div>
  
            <button className="navbar-toggler w-sm-20" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
  
            <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
              <div className="navbar-nav d-flex mx-auto text-center">
                <div className="title d-block d-sm-none">THE PANDAS<br /> SOCIETY™</div>
                <a className="link active" href="#">Home</a>
                <a className="link" href="#">ABOUT US</a>
                <a className="link" href="#">UTILITIES</a>
                <a className="link" href="#">TEAM</a>
              </div>
  
              <div className="navbar-nav d-flex gap-3 justify-content-center align-items-center">
                <a href="#" target="_blank" rel="noreferrer" className="btn-gradient">DISCORD</a>
                <a href="#" target="_blank" rel="noreferrer" className="btn-gradient">WHITELIST</a>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;