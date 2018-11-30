import {combineReducers} from 'redux';
import itemsReducer from './items';

const rootReducer = combineReducers(
    {test:'',searchQuery:itemsReducer}
)

export default rootReducer;