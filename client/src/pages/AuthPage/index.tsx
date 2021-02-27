import React from 'react';
import Auth from '../../components/Auth';
import './index.css';

const AuthPage: React.FC = () => {
    return (
        <div className = "auth-page-body">
            <Auth />
        </div>
    );
}

export default AuthPage;