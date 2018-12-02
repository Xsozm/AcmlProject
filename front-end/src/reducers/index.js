import {combineReducers} from 'redux';
import itemsReducer from './items';
import { reducer as reduxFormReducer } from 'redux-form';
import notificationsReducer from './notifications';
import authReducer from './user';

const rootReducer = combineReducers(
    {searchQuery:itemsReducer,form:reduxFormReducer,notifications:notificationsReducer,auth:authReducer}
)

export default rootReducer;