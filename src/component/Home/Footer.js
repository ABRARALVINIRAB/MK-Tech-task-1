import React from 'react';
import "./Footer.css"
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='foter mt-5'>
            <div className="footer-container container mt-5">
                <div className="item1">
                    <h3 className='purple'>We are social</h3>
                    <h4>FOLLOW US</h4>
                    <div >
                        <p ><span ><AiOutlineInstagram className='instar' /> <span><AiOutlineFacebook className='facebook' /></span> </span> <span><AiFillYoutube className='youtube' /></span></p>
                    </div>
                    <h4>LOGO</h4>
                </div>
                <div className="item2">
                    <h3 className='purple '>Links</h3>
                    <h4 className='black mt-2'>ADVERTISERS</h4>
                    <h4 className='black mt-2'>PUBLISHERS
                    </h4>
                    <h4 className='black mt-2'>INFLUENCERS</h4>
                    <h4 className='black mt-2'>AD FORMATS</h4>
                </div>
                <div className="item2">
                    <h3 className='purple '>Documentation</h3>
                    <h4 className='black mt-2'>TERMS & CONDITIONS</h4>
                    <h4 className='black mt-2'>PRIVACY POLICY
                    </h4>
                    <h4 className='black mt-2'>CANCELLATION POLICY</h4>
                    <h4 className='black mt-2'>BLOG</h4>
                </div>
                <div className="item2">
                    <h3 className='purple '>Support</h3>
                    <h4 className='black mt-2'>FAQ</h4>
                    <h4 className='black mt-2'>MEDIA KIT
                    </h4>
                    <h4 className='black mt-2'>CONTACT US</h4>
                    
                </div>
            </div>

        </div>
    );
};

export default Footer;