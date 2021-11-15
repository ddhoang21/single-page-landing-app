import React from 'react';
import { SiAmazonaws, SiGooglecloud, SiMicrosoftazure } from 'react-icons/si';
import './brand.css';

const Brand = () => {
    return (
        <div className='brand section__padding'>
            <div className='aws-logo'>
                <SiAmazonaws color="#fff" />
            </div>
            <div className='cloud-logo'>
                <SiGooglecloud color="#fff" />
            </div>
            <div className='azure-logo'>
                <SiMicrosoftazure color="#fff" />
            </div>
        </div>
    )
}

export default Brand;
