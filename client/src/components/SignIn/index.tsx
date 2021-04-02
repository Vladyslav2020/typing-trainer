import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { signIn } from '../../redux/actions';
import './index.css';

const mapDispatchToProps = {
    signIn
}

const connector = connect(null, mapDispatchToProps);

type TProps = ConnectedProps<typeof connector>;

const SignIn: React.FC<TProps> = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function changeHandler(type: string, event: React.ChangeEvent<HTMLInputElement>): void{
        if (type === 'email'){
            setEmail(event.target.value);
        }
        if (type === 'password'){
            setPassword(event.target.value);
        }
    }

    function clickHandler(event: React.MouseEvent<HTMLButtonElement>): void{
        event.preventDefault();
        props.signIn({email, password});
    }
    return (
        <div className = "form-block">
            <div className = "head">Sign in to typing-trainer</div>
            <form className = "form">
                <div className = "form-item">
                    <i className="far fa-envelope"></i>
                    <input 
                        type = "email" 
                        placeholder = "Email"
                        value = {email}
                        onChange = {changeHandler.bind(null, "email")}
                    />
                </div>
                <div className = "form-item">
                    <i className="fas fa-lock"></i>
                    <input 
                        type = "password" 
                        placeholder = "Password"
                        value = {password}
                        onChange = {changeHandler.bind(null, "password")}
                    />
                </div>

                <button onClick = {clickHandler}>Sign In</button>
                <div className = 'forgot-password'>Forgot your password?</div>
            </form>
        </div>
    );
}

export default connector(SignIn);