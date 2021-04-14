import React from 'react';
import UserTrainingItem from '../../components/UserTrainingItem';
import { UserTrainingI } from '../../interfaces/userTrainingsReducerI';
import { PropTypes } from './interfaces';
import './index.css';

const UserTrainingsContainer: React.FC<PropTypes> = (props) => {
    let firstLockedTraining = 2;
    for (let i = 0; i < props.trainings.length; i++){
        if (props.trainings[i].completed)
            firstLockedTraining = i + 2;
        else
            break;
    }
    let items = (props.trainings.length > 0? 
        props.trainings.map((item, index) => <UserTrainingItem data = {item} locked = {index >= firstLockedTraining - 1} key = {item.trainingNumber} />)
        :<div className = 'no-trainings'>No training</div>);
    return(
        <div className = "user-trainings-container">
            {items}
        </div>
    )
}

export default UserTrainingsContainer;