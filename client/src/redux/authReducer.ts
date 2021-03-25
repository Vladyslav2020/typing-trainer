import { Reducer } from 'redux';
import { ActionInterface } from '../interfaces/actions';
import { AuthState } from '../interfaces/authReducerI';
import { SET_AUTH_DATA } from './types';

const initialState : AuthState = {
    name: "", 
    email: "",
    token: ""
}

export const authReducer: Reducer<AuthState, ActionInterface<AuthState> > = (state = initialState, action) => {
    switch (action.type){
        case SET_AUTH_DATA: return {...state, name: action.payload?.name, email: action.payload?.email, token: action.payload?.token} as AuthState;
        default: return state;
    }
}