import { AuthState } from "./authReducerI";
import { UserTrainingI } from "./userTrainingsReducerI";

export interface RegisterResponceType{
    message: string;
}

export interface SignInResponseType{
    message: string | AuthState;
}

export interface UserTrainingResponseType{
    message: string | UserTrainingI;
}