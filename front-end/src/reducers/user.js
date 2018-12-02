import {AUTH_USER,DEAUTH_USER } from '../actions/types';
const INTIL_STATE = {}
export default function(state=INTIL_STATE,action) {
    switch(action.type){
       case AUTH_USER: return {...state,authnticated:true}
       case DEAUTH_USER: return {...state,authnticated:false}
       default : return state
    }
}