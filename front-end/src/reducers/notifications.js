import {FETCH_NOTIFICATIONS} from '../actions/types';
import {FETCH_NOTIFICATION} from '../actions/types';
const INTIL_STATE = {notifications:[]}
export default function(state=INTIL_STATE,action) {
    switch(action.type){
       case FETCH_NOTIFICATIONS:console.log(action); return {...state,notifications:action.payload}
       case FETCH_NOTIFICATION: return{...state,notifications:[...state.notifications,action.payload]} 
       default : return state
    }
}