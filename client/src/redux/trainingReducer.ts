import { ActionInterface } from "../interfaces/actions";
import { Training } from "../interfaces/trainingReducerI";
import { SET_TRAINING } from "./types";

const initialState:Training = {
    number: 0,
    title: '',
    text: '',
    numberPossibleErrors: 0
}

export const trainingReducer = (state = initialState, action: ActionInterface<Training>) => {
    switch(action.type){
        case SET_TRAINING: return {...state, ...action.payload};
        default: return state;
    }
}