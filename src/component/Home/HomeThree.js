import React from 'react';
import "./HomeThree.css"
import { AiOutlineArrowsAlt } from 'react-icons/ai';
const HomeThree = () => {
    return (
        <div className='third-home-page-container mt-5'>
            <div className="available-container ">
                <div className="col-md- ms-5">
                    -----------------------------------------------------------------------------------------
                </div>
                <div className="col-md-40 purple ms-5">
                    <h3>VERSATILE AD FORMATS
                    </h3>
                </div>
                <div className="col-md-4 ms-5">
                    -----------------------------------------------------------------------------------------------
                </div>
            </div>
            <div className="nav-section container mt-5">
                <div>
                    <button className='btn-all active-btn'>
                        POP-UNDER
                    </button>
                </div>
                <div>
                    <button className='btn-all nav-btn'>
                        BANNER AD
                    </button>
                </div>
                <div>
                    <button className='btn-all nav-btn'>
                        NATIVE
                    </button>
                </div>
                <div>
                    <button className='btn-all nav-btn'>
                        SKIM
                    </button>
                </div>
            </div>

            <div className="pop-under-container container mt-5 mb-5">
                <div className="first-element">
                    <div className='add-format text-white'>
                        <h1>Ad Format </h1>
                        <h6>Explanation graphics of ad format
                        </h6>
                        <img src="" alt="(Image will be changed)" />
                    </div>
                </div>
                <div className="second-element">
                    <h1 className='orange'>POP-UNDER</h1>
                    <p>This is one of the most popular ads. After user???s click, this <br />
                        ad opens landing page in behind. <br /> So, the user experience is
                        not hampered much.</p>

                <h4 className='purple mt-5 mb-5'>Learn More <AiOutlineArrowsAlt></AiOutlineArrowsAlt></h4>

                </div>
            </div>
        </div>
    );
};

export default HomeThree;