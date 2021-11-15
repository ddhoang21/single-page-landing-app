import React from 'react';
// import Feature  from '../../components/feature/Feature';
import './about.css';

const About = () => {
    return (
        <div className='about section__margin' id='about'>
            <h1 className='about-title'>Who is VKBE</h1>
            <div className='about-heading'>
                <h1 className='gradient__text'>We are a technology consulting firm specialized in delivering cloud solutions to our clients</h1>
            </div>
            <div>
                <p>As certified cloud developers, we ensure that your implementation is done correctly. Whether you are getting started with a cloud provider, kickstarting a project, or in the middle of an existing one, we will help you achieve your goals and capitalize on the benefits of cloud computing.</p>
                <p>Our mission is to create a seamless transition by providing you with the necessary resources and knowledge throughout your entire cloud journey.</p>
            </div>
            {/* <div className='about-container'>
                <Feature title='Security & Compliance' text='Ensure that your infrastructure follows the security best practices'/>
                <Feature title='Strategic Consulting' text='Offer architectural guidance on starting and optimizing your projects'/>
                <Feature title='Cost' text='Reduce your bill by optimizing your environments and configurations'/>
                <Feature title='DevOps' text='Give you hands-on help with the build and release process' />
                <Feature title='Cloud Migration' text='Show you the most efficient way to migrate your workloads to the cloud' />
                <Feature title='Build Application' text='Build highly scalable applications using cloud native services' />
            </div> */}
        </div>
    )
}

export default About;
