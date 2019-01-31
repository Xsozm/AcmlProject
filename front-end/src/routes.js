import React from 'react';
import App from './App';
import {Route,IndexRoute} from 'react-router';
import Main from './components/mainPage/Main';
import Search from '../src/components/search/Search';
import ItemForm from '../src/components/itemForm/ItemForm';
import LogIn from '../src/components/login/Login';
import Notifications from '../src/components/notifications/Notifications';
import rquireAuth from '../src/components/requireAuth/RequireAuth';
import RegisterComp from '../src/components/register/Register';

const routes = 
<Route path="/" component={App}>
    <IndexRoute  component={Main} />
    <Route path="/search/:query" component={Search} />
    <Route path="/item/post" component={rquireAuth(ItemForm)} />
    <Route path="/notifications" component={rquireAuth(Notifications)} />
    <Route path="/login" component={LogIn} />
    <Route path="/signup" component={RegisterComp} />

</Route>

export default routes;
