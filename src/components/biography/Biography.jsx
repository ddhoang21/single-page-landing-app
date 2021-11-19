import React from 'react';
import './biography.css';

const Biography = ({ image, name, status, text }) => {
    return (
        <div className='team-container_biography'>
            {/* <div className='team-container_biography-image'>
                <img scr={image} alt='team-member' />
            </div> */}
            <div className='team-container_biography-content'>
                <div>
                    <h3 className='gradient__text'>{name}</h3>
                    <h4>{status}</h4>
                </div>
                <p>{text}</p>          
            </div>
        </div>

    )
}

export default Biography;
