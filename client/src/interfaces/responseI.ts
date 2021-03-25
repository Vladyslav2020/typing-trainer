import { AuthState } from "./authReducerI";

export interface RegisterResponceType{
    message: string;
}

export interface SignInResponseType{
    message: string | AuthState;
}