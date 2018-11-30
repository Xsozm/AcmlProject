import React from 'react';
import App from './App';
import {Route,IndexRoute} from 'react-router';
import Main from './components/mainPage/Main'

const routes = 
<Route path="/" component={App}>
    <IndexRoute  component={Main} />

</Route>

export default routes;
