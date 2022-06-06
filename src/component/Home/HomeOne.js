import React from 'react';
import "./Home.css"

const HomeOne = () => {
    return (
        <div className='first-home-page-container '>
            <div className="logo-parent">
                <div>
                    <h1 className='logo ms-5'>LOGO</h1>
                </div>
                <div className='me-5'>
                    <p><span className='text-success '>BN </span>/ EN</p>
                </div>

            </div>
            <nav class="navbar navbar-expand-lg  ">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item orange">
                                <button className='btn-all orange nav-link active'>   HOME </button>
                            </li>
                            <li class="nav-item purple">
                                <button className='btn-all purple nav-link active'>   ADVERTISERS  </button>
                            </li>
                            <li class="nav-item purple">
                                <button className='btn-all purple nav-link active'>   PUBLISHERS   </button>
                            </li>
                            <li class="nav-item purple">
                                <button className='btn-all purple nav-link active'>    INFLUENCERS   </button>
                            </li>
                            <li class="nav-item purple">
                                <button className='btn-all purple nav-link active'>   AD FORMATS </button>
                            </li>
                            <li class="nav-item purple">
                                <button className='btn-all purple nav-link active'>   BLOG </button>
                            </li>
                            <li class="nav-item purple">
                                <button className='btn-all purple nav-link active'>  CONTACT US  </button>
                            </li>

                        </ul>
                        <form class="d-flex login-parent">

                            <div className="login ms-3 ">
                                LOGIN
                            </div>
                            <div className="register ms-5 me-3 text-white orange-bg">
                                SIGN UP
                            </div>
                        </form>
                    </div>
                </div>
            </nav>

            <div className="first-page-element container">
                <div className="col-md-6 col-sm-12 purple">
                    <h1 className='mt-5 me-5'>Here will be a Title</h1>
                    <p className='mt-5 black'>Here will be a text</p>
                </div>
                <div className="col-md-6 mt-5 col-sm-12">
                    <div className='art-work black'>
                        <h1>Artwork for title 1</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeOne;