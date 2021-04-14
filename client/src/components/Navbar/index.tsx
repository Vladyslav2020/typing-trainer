import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarI } from './interfaces';
import './index.css';

const Navbar: React.FC<NavbarI> = (props) => {
    return (
        <div className = "nav-block">
            {props.authenticated?
            <>
                <NavLink className = "nav-item" to = "/trainings">Training</NavLink>
                <NavLink className = "nav-item" to = "/competition">Competition</NavLink>
                <NavLink className = "nav-item" to = "/leaderboard">Leaderboard</NavLink>
                <NavLink className = "nav-item" to = "/test">Test speed typing</NavLink>
            </>:
            <>
                <NavLink className = "nav-item" to = '/main'>Main</NavLink>
                <NavLink className = "nav-item" to = '/about'>About</NavLink>
            </>}
        </div>
    );
}

export default Navbar;