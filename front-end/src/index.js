import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {applyMiddleware,createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers/index';
import {Router,browserHistory} from 'react-router';
import routes from './routes';
import {AUTH_USER} from '../src/actions/types';

const storeWithMiddleWare = applyMiddleware(reduxThunk)(createStore);
const store = storeWithMiddleWare(reducers);

if(localStorage.getItem('token')){
    store.dispatch({type:AUTH_USER})
}


ReactDOM.render(
<Provider store={store} >
   <Router  history={browserHistory} routes={routes} >
   </Router>
    </Provider >
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
