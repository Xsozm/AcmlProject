import React from 'react';
import App from './App';
import {Route,IndexRoute} from 'react-router';
import Main from './components/mainPage/Main';
import Search from '../src/components/search/Search';
import ItemForm from '../src/components/itemForm/ItemForm';

const routes = 
<Route path="/" component={App}>
    <IndexRoute  component={Main} />
    <Route path="/search/:query" component={Search} />
    <Route path="/item/submit" component={ItemForm} />

</Route>

export default routes;
