import {combineReducers} from 'redux';
import itemsReducer from './items';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers(
    {test:'',searchQuery:itemsReducer,form:reduxFormReducer}
)

export default rootReducer;