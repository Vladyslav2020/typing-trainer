import React, {useEffect} from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import MainPage from "./pages/MainPage/index";
import HomePage from "./pages/HomePage/index";
import AuthPage from './pages/AuthPage';
import TrainingsPage from './pages/TrainingsPage';
import { ApplicationState } from './interfaces/rootReducerI';
import { setAuthData } from './redux/actions';
import TrainingPage from './pages/TrainingPage';

const mapStateToProps = (state: ApplicationState) => ({auth: state.auth})

const connector = connect(mapStateToProps);

type PropTypes = ConnectedProps<typeof connector>;

const App: React.FC<PropTypes> = (props) => {
    return (  
        <BrowserRouter>
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
                    <Route path='/training/:id'>
                        <TrainingPage />
                    </Route>
                    <Redirect to = "/trainings" />
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
        </BrowserRouter>
    )
}

export default connector(App);