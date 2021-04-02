import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { register } from '../../redux/actions';
import './index.css';

const mapDispatchToProps = {
    register
}

const connector = connect(null, mapDispatchToProps);

type TProps = ConnectedProps<typeof connector>

const Register: React.FC<TProps> = (props) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    function changeHandler(type: string, event: React.ChangeEvent<HTMLInputElement>){
        if (type === 'name')
            setName(event.target.value);
        if (type === 'email')
            setEmail(event.target.value);
        if (type === 'password')
            setPassword(event.target.value);
        if (type === 'repeatPassword')
            setRepeatPassword(event.target.value);
    }

    function clickHandler(event: React.MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        props.register({name, email, password});
    }

    return (
        <div className = "form-block">
            <div className = "head">Create an Account</div>
            <form className = "form">
                <div className = "form-item">
                    <i className="far fa-user"></i>
                    <input 
                        type = "text" 
                        placeholder = "Name"
                        value = {name}
                        onChange = {changeHandler.bind(null, 'name')}
                    />
                </div>
                <div className = "form-item">
                    <i className="far fa-envelope"></i>
                    <input 
                        type = "email" 
                        placeholder = "Email"
                        value = {email}
                        onChange = {changeHandler.bind(null, 'email')}
                    />
                </div>
                <div className = "form-item">
                    <i className="fas fa-lock"></i>
                    <input 
                        type = "password" 
                        placeholder = "Password"
                        value = {password}
                        onChange = {changeHandler.bind(null, 'password')}
                    />
                </div>
                <div className = "form-item">
                    <i className="fas fa-lock"></i>
                    <input 
                        type = "password" 
                        placeholder = "Repeat password"
                        value = {repeatPassword}
                        onChange = {changeHandler.bind(null, 'repeatPassword')}
                    />
                </div>
                <button onClick = {clickHandler}>Sign Up</button>
            </form>
        </div>
    );
}

export default connector(Register);