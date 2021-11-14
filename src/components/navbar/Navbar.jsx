import React, { useState} from 'react';
import  { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/vkbe-finallogo-02.png';
import './navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='navbar'>
            <div className='navbar-links'>
                <div className='navbar-links_logo'>
                    <img src={logo} alt='logo' />
                </div>
            </div>
            <div className='navbar-links_container'>
                <p><a href='#about'>About</a></p>
                <p><a href='#services'>Services</a></p>
                <p><a href='#team'>Team</a></p>
                <p><a href='#contact'>Contact Us</a></p>
            </div>
            <div className="navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                <div className="navbar-menu_container scale-up-center">
                    <div className="navbar-menu_container-links">
                        <p><a href='#about'>About</a></p>
                        <p><a href='#services'>Services</a></p>
                        <p><a href='#team'>Team</a></p>
                        <p><a href='#contact'>Contact Us</a></p>
                    </div>
                </div>
                )}
            </div>
        </div>
        
    )
}

export default Navbar;
