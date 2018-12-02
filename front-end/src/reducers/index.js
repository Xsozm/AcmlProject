import {combineReducers} from 'redux';
import itemsReducer from './items';
import { reducer as reduxFormReducer } from 'redux-form';
import notificationsReducer from './notifications';

const rootReducer = combineReducers(
    {searchQuery:itemsReducer,form:reduxFormReducer,notifications:notificationsReducer}
)

export default rootReducer;