import {FETCH_NOTIFICATIONS,ADD_NEW_NOTIFICATION} from '../actions/types';
const INTIL_STATE = {notifications:[]}
export default function(state=INTIL_STATE,action) {
    switch(action.type){
       case FETCH_NOTIFICATIONS: return {...state,notifications:action.payload}
       case ADD_NEW_NOTIFICATION: return{...state,notifications:[...state.notifications,action.payload]} 
       default : return state
    }
}