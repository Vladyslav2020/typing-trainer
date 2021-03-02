import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Navbar: React.FC = () => {
    return (
        <div className = "nav-block">
            <NavLink className = "nav-item" to = "/main">Main</NavLink>
            <NavLink className = "nav-item" to = "/training">Traning</NavLink>
            <NavLink className = "nav-item" to = "/competition">Competition</NavLink>
            <NavLink className = "nav-item" to = "/leaderboard">Leaderboard</NavLink>
            <NavLink className = "nav-item" to = "/test">Test speed typing</NavLink>
        </div>
    );
}

export default Navbar;