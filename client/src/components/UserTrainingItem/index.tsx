import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { PropTypes } from '../UserTrainingItem/interfaces';
import './index.css';

const UserTrainingItem: React.FC<PropTypes> = (props) => {
    const stars = [1, 2, 3].map(item => <i className={item <= props.data.numberStars? "fas fa-star active": "fas fa-star"}></i>)
    const jsx = <div className = "user-training-item">
        <div className = "user-training-number">
            {props.data.trainingNumber}
        </div>
        <div className = "user-training-title">
            {props.data.title}
        </div>
        <div className = "user-stars">
            {stars}
            <div className = 'completed'>
                {props.locked? <i className="fas fa-lock"></i> : (props.data.completed ? <i className="far fa-check-circle completed"></i> 
                :<i className="far fa-times-circle"></i>)}
            </div>
        </div>
    </div>;
    if (props.locked){
        return jsx;
    }
    return (
        <NavLink to = {`/training/${props.data.trainingNumber}`}>
            {jsx}
        </NavLink>
    );
}

export default UserTrainingItem;