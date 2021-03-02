import { Reducer } from 'redux';
import { ActionInterface } from '../interfaces/actions';
import { AuthState } from '../interfaces/authReducerInterfaces';

const initialState : AuthState = {
    name: "", 
    email: "",
    token: ""
}

export const authReducer: Reducer<AuthState, ActionInterface> = (state = initialState, action) => {
    switch (action.type){
        default: return state;
    }
}