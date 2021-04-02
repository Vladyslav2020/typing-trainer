import { ActionInterface } from "../interfaces/actions";
import { userTrainingsState, UserTrainingI } from "../interfaces/userTrainingsReducerI";
import { ADD_USER_TRAINING_DATA } from "./types";

const initialState = {
    trainings: []
}

export const userTrainingsReducer = (state: userTrainingsState = initialState, action : ActionInterface<UserTrainingI>) => {
    switch(action.type){
        case ADD_USER_TRAINING_DATA:{
            if (action.payload.trainingNumber > state.trainings.length)
                return {trainings: [...state.trainings, action.payload]};
            state.trainings = state.trainings.map(item => (item.trainingNumber === action.payload.trainingNumber ? action.payload : item));
            return {...state};
        };
        default: return state;
    }
}