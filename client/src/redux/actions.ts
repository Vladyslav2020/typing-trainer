import { Dispatch } from 'react';
import { ActionCreator, AnyAction } from 'redux';
import { ActionInterface } from '../interfaces/actions';
import { AuthState } from '../interfaces/authReducerI';
import { MessageType } from '../interfaces/messageReducerI';
import { RegisterResponceType, SignInResponseType } from '../interfaces/responseI';
import { SET_AUTH_DATA, SET_MESSAGE } from './types';

export const setAuthData:ActionCreator<ActionInterface<AuthState>> = (name: string, email: string, token: string) => {
    return {
        type: SET_AUTH_DATA,
        payload:{
            name, email, token
        }
    };
}

export const setMessage: ActionCreator<ActionInterface<MessageType>> = (message: string) => {
    return {
        type: SET_MESSAGE,
        payload: {
            message
        }
    };
}

export const register = (name: string, email: string, password: string) => {
    return async(dispatch:Dispatch<ActionInterface<MessageType>>) => {
        try{
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                body: JSON.stringify({name, email, password})
            });
            const data: RegisterResponceType = await response.json();
            dispatch(setMessage(data.message));
            console.log(data.message);
        }
        catch(err){
            console.log("Error", err.message);
        }
    }
}

export const signIn = (email: string, password: string) => {
    return async(dispatch:Dispatch<AnyAction>) => {
        try{
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: 'POST',
                body: JSON.stringify({email, password})
            });
            const data: SignInResponseType = await response.json();
            if (typeof data.message === 'string'){
                dispatch(setMessage(data.message))
            }
            else{
                dispatch(setMessage("You are signed in"));
                dispatch(setAuthData(data.message.name, data.message.email, data.message.token));
            }
        }
        catch(err){
            console.log("Error", err.message);
        }
    }
}