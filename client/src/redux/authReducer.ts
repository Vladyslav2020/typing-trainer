import { Reducer } from 'redux';
import { ActionInterface } from '../interfaces/actions';
import { AuthState } from '../interfaces/authReducerI';
import { SET_AUTH_DATA, RESET_AUTH_DATA } from './types';

const initialState : AuthState = {
    id: "",
    email: "",
    name: "", 
    token: "",
    numberCompletedTrainings: 0,
    numberFriends: 0,
    rank: "",
    registerDate: "",
    speedTypingRecord: 0
}

export const authReducer: Reducer<AuthState, ActionInterface<AuthState> > = (state = initialState, action) => {
    switch (action.type){
        case SET_AUTH_DATA: return {...state, ...action.payload};
        case RESET_AUTH_DATA: return {...initialState};
        default: return state;
    }
}