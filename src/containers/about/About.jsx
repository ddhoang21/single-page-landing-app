import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className='about section__margin' id='about'>
            <h1 className='about-title'>Who is VKBE</h1>
            <div className='about-heading'>
                <h1 className='gradient__text'>A technology consulting firm specialized in delivering cloud solutions.</h1>
            </div>
            <div className='about-text'>
                <p>As certified cloud developers, we ensure that your implementation is done correctly. Whether you are getting started with a cloud provider, kickstarting a project, or in the middle of an existing one, we will help you achieve your goals and capitalize on the benefits of cloud computing.</p>
                <p>Our mission is to create a seamless transition by providing you with the necessary resources and knowledge throughout your entire cloud journey.</p>
            </div>
        </div>
    )
}

export default About;
