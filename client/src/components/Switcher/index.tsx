import React from 'react';
import './index.css';
import { SwitcherProps } from './interfaces';

const Switcher: React.FC< SwitcherProps > = (props) => {
    return (
        <div className = "switcher">
            <div className = "container">
                <div className = "title">
                    {props.title}
                </div>
                <div className = "text">
                    {props.text}
                </div>
                <button onClick = {props.handler}>{props.buttonText}</button>
            </div>
        </div>
    )
}

export default Switcher;