import { Reducer } from "react";
import { ActionInterface } from './actions';
import { AuthState } from './authReducerI';
import { Training } from "./trainingReducerI";
import { UserTrainingI } from "./userTrainingsReducerI";

export interface ApplicationState{
    auth: AuthState;
    message: string;
    trainings: {
        trainings: Array<UserTrainingI>
    };
    training: Training;
}