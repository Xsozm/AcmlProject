import React from 'react';
import App from './App';
import {Route,IndexRoute} from 'react-router';
import Main from './components/mainPage/Main';
import Search from '../src/components/search/Search';
import ItemForm from '../src/components/itemForm/ItemForm';
//import LogIn from '../src/components/login/Login';
import Notifications from '../src/components/notifications/Notifications'

const routes = 
<Route path="/" component={App}>
    <IndexRoute  component={Main} />
    <Route path="/search/:query" component={Search} />
    <Route path="/item/submit" component={ItemForm} />
    <Route path="/notifications" component={Notifications} />

</Route>

export default routes;
