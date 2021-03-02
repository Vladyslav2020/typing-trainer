import { Reducer } from "react";
import { ActionInterface } from '../interfaces/actions';
import { AuthState } from '../interfaces/authReducerInterfaces';

export interface ApplicationState{
    auth: Reducer<AuthState, ActionInterface>;
}