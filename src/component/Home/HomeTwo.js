import React from 'react';
import "./Home.css"
import "./HomeTwo.css"
// import { IconName } from "react-icons/ai";
// BsVolumeUpFill
import { AiFillSound } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';

const HomeTwo = () => {
    return (
        <div className='second-home-page-container mt-5'>
            <div className="available-container ">
                <div className="col-md- ms-5">
                    -----------------------------------------------------------------------------------------
                </div>
                <div className="col-md-40 purple ms-5">
                    <h3>AVAILABLE FOR EVERYONE</h3>
                </div>
                <div className="col-md-4 ms-5">
                    -----------------------------------------------------------------------------------------------
                </div>
            </div>
            <h1 className='text-center'>Here will be a text</h1>

            <div className="seond-home-page-content container mt-5">
                <div className="first-one">
                    <p className='icon-container'><AiFillSound className='icons' /></p>
                    <p className='text-center'>Text 1</p>
                    <button className='text-center hello btn-all'>Hello 1</button>
                </div>
                <div className="second-one">
                    <p className='icon-container'><AiOutlineTwitter className='icons' /></p>
                    <p className='text-center'>Text 2</p>
                    <button className='text-center hello btn-all'>Hello 2</button>
                </div>
                <div className="third-one">
                    <p className='icon-container'><AiFillMail className='icons' /></p>
                    <p className='text-center'>Text 3</p>
                    <button className='text-center hello btn-all'>Hello 3</button>
                </div>
            </div>

        </div>
    );
};

export default HomeTwo;