import { Reducer } from "react";
import { ActionInterface } from "../interfaces/actions";
import { MessageType } from "../interfaces/messageReducerI";
import { SET_MESSAGE } from "./types";

const initialState: MessageType = {
    message: ''
};

export const messageReducer:Reducer<MessageType, ActionInterface<MessageType>> = (state: MessageType = initialState, action: ActionInterface<MessageType>) => {
    switch(action.type){
        case SET_MESSAGE: return {...state, message: action.payload?.message} as MessageType
        default: return state;
    }
}