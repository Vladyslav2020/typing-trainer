import React, {useEffect} from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import MainPage from "./pages/MainPage/index";
import HomePage from "./pages/HomePage/index";
import AuthPage from './pages/AuthPage';
import TrainingsPage from './pages/TrainingsPage';
import { ApplicationState } from './interfaces/rootReducerI';
import { setAuthData } from './redux/actions';

const mapStateToProps = (state: ApplicationState) => ({auth: state.auth})
const mapDispatchToProps = {
    setAuthData
};
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropTypes = ConnectedProps<typeof connector>;

const App: React.FC<PropTypes> = (props) => {
    useEffect(() => {
        console.log("Auth:", props.auth);
        const data = localStorage.getItem("auth");
        if (typeof data === 'string')
            props.setAuthData(JSON.parse(data));
        console.log("isAutenticated:", !!props.auth.token)
    }, [props.auth.id, props.auth.token]);
    return (  
        <BrowserRouter>
            <>
                {!!props.auth.token? 
                    <Switch>
                        <Route path="/main" exact>
                            <MainPage />
                        </Route>
                        <Route path="/home" exact>
                            <HomePage />
                        </Route>
                        <Route path="/trainings" exact>
                            <TrainingsPage />
                        </Route>
                        <Redirect to = "/home" />
                    </Switch>:
                    <Switch>
                        <Route path="/main" exact>
                            <MainPage />
                        </Route>
                        <Route path="/auth" exact>
                            <AuthPage />
                        </Route>
                        <Redirect to = "/main"/>
                    </Switch>
                }
            </>
        </BrowserRouter>
    )
}

export default connector(App);