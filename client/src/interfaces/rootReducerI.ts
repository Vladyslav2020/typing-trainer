import { Reducer } from "react";
import { ActionInterface } from './actions';
import { AuthState } from './authReducerI';

export interface ApplicationState{
    auth: Reducer<AuthState, ActionInterface<AuthState>>;
}