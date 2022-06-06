import React from 'react';
import "./Seven.css"

const HomeSeven = () => {
    return (
        <div className='seven-container'>
            <h1 className='text-center text-white mt-5 p-5'>Title 1</h1>
            <div className="parent-title container">
                <div className='one-bln mb-5'>
                    <div className='for-text-center'>
                        <h1 className='text-white text-center'>1 BN+</h1>
                        <h3 className='text-white text-center'>Daily Impressions</h3>
                    </div>
                </div>
                <div className='five mb-5'>
                    <div className='for-text-center'>
                        <h1 className='purple text-center'>$500K+</h1>
                        <h3 className='purple text-center'>Paid
                        </h3>
                    </div>
                </div>
                <div className='eightk mb-5'>
                    <div className='for-text-center'>
                        <h1 className='text-white text-center'>8K+</h1>
                        <h3 className='text-white text-center'>Global Publishers</h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeSeven;