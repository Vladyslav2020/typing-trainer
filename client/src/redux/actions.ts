import { Dispatch } from 'react';
import { ActionCreator, AnyAction } from 'redux';
import { ActionInterface } from '../interfaces/actions';
import { AuthState } from '../interfaces/authReducerI';
import { MessageType } from '../interfaces/messageReducerI';
import { RegisterResponceType, SignInResponseType, UserTrainingResponseType } from '../interfaces/responseI';
import { UserTrainingI } from '../interfaces/userTrainingsReducerI';
import { ADD_USER_TRAINING_DATA, SET_AUTH_DATA, SET_MESSAGE } from './types';

export const setAuthData:ActionCreator<ActionInterface<AuthState>> = (data: AuthState) => {
    return {
        type: SET_AUTH_DATA,
        payload:{
            ...data
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

export const register = ({name, email, password} : {name: string, email: string, password: string}) => {
    return async(dispatch:Dispatch<ActionInterface<MessageType>>) => {
        try{
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({name, email, password})
            });
            const data: RegisterResponceType = await response.json();
            dispatch(setMessage(data.message));
        }
        catch(err){
            console.log("Error:", err.message);
        }
    }
}

export const signIn = ({ email, password } : {email: string, password: string}) => {
    return async(dispatch:Dispatch<AnyAction>) => {
        try{
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({email, password})
            });
            const data: SignInResponseType = await response.json();
            if (typeof data.message === 'string'){
                dispatch(setMessage(data.message))
            }
            else{
                dispatch(setMessage("You are signed in!!"));
                localStorage.setItem("auth", JSON.stringify(data.message));
                dispatch(setAuthData(data.message));
            }
        }
        catch(err){
            console.log("Error:", err.message);
        }
    }
}

export const addUserTrainingData = (data: UserTrainingI) => {
    return {
        type: ADD_USER_TRAINING_DATA,
        payload: data
    }
}

export const addUserTrainings = (numbers: Array<number>, token: string) => {
    return (dispatch: Dispatch<AnyAction>) => {
        try{
            let arr = [];
            for (let item of numbers){
                const response = fetch(`http://localhost:5000/api/training-user/get?number=${item}`, {method: "GET", 
                    headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}});
                arr.push(response);
            }
            Promise.all(arr).then(results => Promise.all(results.map(item => item.json())))
                .then((results: UserTrainingResponseType[]) => {
                for (let data of results){
                    if (typeof data.message === 'string'){
                        dispatch(setMessage(data.message));
                    }
                    else{
                        dispatch(addUserTrainingData(data.message));
                    }
                }
            });
        }
        catch(err){
            console.log("Error: ", err.message);
        }
    }
}