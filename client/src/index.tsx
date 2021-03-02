import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App isAuthenticated = {false}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
