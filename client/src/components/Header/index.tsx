import React from 'react';
import Logo from '../Logo';
import Navbar from '../Navbar';
import User from '../User';
import './index.css';

const Header : React.FC = () => {
    return (
        <div className = 'header'>
            <Logo />
            <Navbar />
            <User authenticated = {false} name = "Vlad"/>
        </div>
    );
}

export default Header;