import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ApplicationState } from '../../interfaces/rootReducerI';
import Logo from '../Logo';
import Navbar from '../Navbar';
import User from '../User';
import { AuthState } from '../../interfaces/authReducerI';
import './index.css';
import { isJSDocAuthorTag } from 'typescript';


const mapStateToProps = (state: ApplicationState) => ({auth: state.auth})
const connector = connect(mapStateToProps);

type PropTypes = ConnectedProps<typeof connector>;

const Header : React.FC<PropTypes> = (props) => {
    let isAutenticated = !!props.auth.token;
    return (
        <div className = 'header'>
            <Logo />
            <Navbar authenticated = {isAutenticated} />
            <User authenticated = {isAutenticated} name = {props.auth.name}/>
        </div>
    );
}

export default connector(Header);