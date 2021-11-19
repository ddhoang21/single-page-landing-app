import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className='contact-content'>
                <p>Interested in our services ?</p>
                <h3>Schedule a free consultation today.</h3>
            </div>
            <div className='contact-btn'>
                <a href='https://calendly.com/vkbe' target='_blank' rel='noreferrer'>
                    <button type='button'>Get Started</button>
                </a>
            </div>
        </div>
    )
}

export default Contact;
