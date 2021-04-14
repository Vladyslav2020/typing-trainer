import React, { useMemo, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useParams } from 'react-router';
import Keyboad from '../../components/Keyboard';
import { ApplicationState } from '../../interfaces/rootReducerI';
import { addTraining } from '../../redux/actions';
import './index.css';

const mapStateToProps = (state: ApplicationState) => ({training: state.training, token: state.auth.token});
const mapDispatchToProps = {
    addTraining
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropTypes = ConnectedProps<typeof connector>

let needToLoadData = false;

const TrainingPage: React.FC<PropTypes> = (props) => {
    const [value, setValue] = useState('');
    const [charNumber, setCharNumber] = useState(0);
    // @ts-ignore
    const trainingId: number = useParams().id;
    if (props.training.number != trainingId)
        needToLoadData = true;
    useMemo(()=>{
        props.addTraining(trainingId, props.token);
    }, [needToLoadData]);
   
    const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(() => event.target.value);
        let distinctIndex = -1;
        event.target.value.split('').forEach((item, index) => {
            let char1 = item, char2 = props.training.text[index]
            if (char1 !== char2 && (char1 !== '\n' || char2 !== ' ')){
                distinctIndex = index;
                return;
            }
        });
        if (distinctIndex === -1){
            if (event.target.value.length !== props.training.text.length){
                setCharNumber(event.target.value.length);
            }
        }
    }

    const charItems = props.training.text.split('').map((item, index) =>{
        if (item === ' ')
            item = String.fromCodePoint(160);
        return (
            index === charNumber? <span key = {index} className = 'char-item active'>{item}</span>:
                <span key = {index} className = 'char-item'>{item}</span>
        )
    });
    return(
        <div className = "training-page">
            <div className = 'training-title'>{props.training.title}</div>
            <div className = 'training-text'>
                <div className = "chars-block">{charItems}</div>
                <div className = 'training-input'>
                    <textarea onChange = {changeHandler}>
                        {value}
                    </textarea>
                </div>
            </div>
            <div className = 'training-keyboard'>
                <Keyboad char = {props.training.text[charNumber] || ""}/>
            </div>
        </div>
    );
}

export default connector(TrainingPage);