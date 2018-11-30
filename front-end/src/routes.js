import React from 'react';
import App from './App';
import {Route,IndexRoute} from 'react-router';
import Main from './components/mainPage/Main';
import Search from '../src/components/search/Search';

const routes = 
<Route path="/" component={App}>
    <IndexRoute  component={Main} />
    <Route path="/search" component={Search} />

</Route>

export default routes;
