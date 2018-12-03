import {FETCH_SEARCH_ITEMS} from '../actions/types';
const INTIL_STATE = {items:[]}
export default function(state=INTIL_STATE,action) {
    switch(action.type){
       case FETCH_SEARCH_ITEMS: return {...state,items:action.payload}
       default : return state
    }
}