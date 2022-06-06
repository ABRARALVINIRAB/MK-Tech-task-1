import React from 'react';
import "./Title.css"

const TitleOne = () => {
    return (
        <div className='title-one-container'>
            <h1 className='text-center purple'>Title 1</h1>
            <h1 className='text-center '> <span className='purple'>-</span> ---</h1>
            <div className="title-item-parent container">
                <div className="title-item-one">
                    <div className='title-item-one-first'>

                    </div>
                    <div className='text-center-all'>
                        <h1>Title 1</h1>
                        <h6>Hello, Here will be a text</h6>
                    </div>
                </div>
                <div className="title-item-one">
                    <div className='title-item-one-first'>

                    </div>
                    <div className='text-center-all'>
                        <h1>Title 2</h1>
                        <h6>Hello Here will be a text</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TitleOne;