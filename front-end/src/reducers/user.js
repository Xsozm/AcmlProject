import {AUTH_USER,DEAUTH_USER,REG_ERR,REG_SUCC } from '../actions/types';
const INTIL_STATE = {}
export default function(state=INTIL_STATE,action) {
    switch(action.type){
       case AUTH_USER: return {...state,authnticated:true}
       case DEAUTH_USER: return {...state,authnticated:false}
       case REG_ERR: return {...state,regError:'something went wrong :/',regSucc:null}
       case REG_SUCC: return {...state,regSucc:'something went right :-)',regError:null}
       default : return state
    }
}