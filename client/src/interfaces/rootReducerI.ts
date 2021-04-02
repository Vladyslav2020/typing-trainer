import { Reducer } from "react";
import { ActionInterface } from './actions';
import { AuthState } from './authReducerI';
import { UserTrainingI } from "./userTrainingsReducerI";

export interface ApplicationState{
    auth: AuthState;
    message: string,
    trainings: {
        trainings: Array<UserTrainingI>
    }
}