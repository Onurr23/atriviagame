import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import thunk from "redux-thunk";
import rootReducer from "./Redux/Reducers/rootReducer";
import {createStore,applyMiddleware,compose} from "redux";
import {Provider} from "react-redux"

const store = createStore(rootReducer,compose(applyMiddleware(thunk)))

ReactDOM.render( <BrowserRouter> <Provider store={store}> <App /> </Provider>  </BrowserRouter> , document.getElementById('root'));

