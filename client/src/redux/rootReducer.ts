import { combineReducers} from 'redux';
import { authReducer } from './authReducer';
import { messageReducer } from './messageReducer';
import { userTrainingsReducer } from './userTrainingsReducer';
import { trainingReducer } from './trainingReducer';

export const rootReducer = combineReducers({auth: authReducer, message: messageReducer, trainings: userTrainingsReducer,
training: trainingReducer});