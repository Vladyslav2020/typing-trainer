import React, {useState} from 'react';
import { AuthProps } from './Auth';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import Switcher from '../Switcher';
import './index.css';

type AuthType = 'login' | 'register';

const Auth: React.FC< AuthProps > = (props) => {
    const [type, setType] = useState<AuthType>('login');
    function clickHandler(): void{
        setType(prevType => prevType === 'login'? 'register': 'login');
    }
    return (
        <div className = 'auth-block'>
            {type === 'login'?
            <>
                <SignIn />
                <Switcher 
                    title = "Hello, Friend!" 
                    text = "Enter your personal details ans start journey with us"
                    buttonText = "Sign Up"
                    handler = {clickHandler}
                />
            </>:
            <>
                <Switcher 
                    title = "Welcome back!" 
                    text = "To keep connected with us please login with your personal info"
                    buttonText = "Sign In"
                    handler = {clickHandler}
                />
                <SignUp />
            </>}
        </div>
    );
}

export default Auth;