import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserProps } from './interfaces';
import './index.css';

const User: React.FC<UserProps> = (props) => {
    return (
        <div className = 'user'>
            {
                (props.authenticated ? 
                <div className = 'profile-menu'><i className="far fa-user"></i> {props.name}</div>:
                <div className = 'link-signIn'><NavLink className = "text" to = '/auth'>Sign In</NavLink></div>
                )
            }
        </div>
    )
}

export default User;