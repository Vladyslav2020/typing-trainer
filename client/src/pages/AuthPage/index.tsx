import React from 'react';
import Auth from '../../components/Auth';
import Header from '../../components/Header';
import './index.css';

const AuthPage: React.FC = () => {
    return (
        <>
            <Header/>
            <div className = "auth-page-body">
                
                <Auth />
            </div>
        </>
    );
}

export default AuthPage;