import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import MainPage from "./pages/MainPage/index";
import HomePage from "./pages/HomePage/index";
import { AppProps } from "./AppI";
import Auth from "./components/Auth";
import AuthPage from './pages/AuthPage';

const App: React.FC<AppProps> = (props) => {
    return (  
        <BrowserRouter>
            <Switch>
                <Route component = {AuthPage} path = "/auth" />
                {props.isAuthenticated? 
                    <>
                        <Route component = {MainPage} path = "/main" />
                        <Route component = {HomePage} path = "/home" />
                        <Redirect to = "/home" />
                    </>:
                    <>
                        <Route component = {MainPage} path = "/main"/>
                        <Redirect to = "/main"/>
                    </>
                }
            </Switch>
        </BrowserRouter>
    )
}

export default App;