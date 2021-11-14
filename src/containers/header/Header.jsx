import React from 'react';
import './header.css';
import headerImage from '../../assets/background-illustration-02.png';

const Header = () => {
    return (
        <div className='header section__padding' id='home'>
            <div className='header-content'>
                <h1 className='gradient__text'>Delivering astounding cloud solutions</h1>
                <p>A Seattle based software consulting firm</p>
            </div>
            <div className='header-image'>
                <img src={headerImage} alt='headerIllustration' />
            </div>
        </div>
    )
}

export default Header;
