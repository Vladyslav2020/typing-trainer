import React, { useMemo } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Header from '../../components/Header';
import UserTrainingsContainer from '../../components/UserTrainingsContainer';
import { ApplicationState } from '../../interfaces/rootReducerI';
import { addUserTrainings } from '../../redux/actions';
import './index.css';

const mapStateToProps = (state: ApplicationState) => ({trainings: state.trainings.trainings, auth: state.auth});
const mapDispatchToProps = {
    addUserTrainings
}
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropTypes = ConnectedProps<typeof connector>

let shouldComponentUpdate = false;

const TrainingsPage: React.FC<PropTypes> = (props) => {
    const arr: number[] = [];
    for (let i = 0; i < 10; i++)
        arr.push(i + 1);
    console.log(1);
    useMemo(() => {
        console.log(2);
        shouldComponentUpdate = true;
        props.addUserTrainings(arr, props.auth.token);
    }, [shouldComponentUpdate])
    return (
        <React.Fragment>
            <Header />
            <div className = 'trainings-page'>
                <UserTrainingsContainer trainings = {props.trainings}/>
            </div>
        </React.Fragment>
    )
}

export default connector(TrainingsPage);