import {AUTH_USER,DEAUTH_USER,REG_ERR,REG_SUCC,LOADING_REQ,FINISHING_REQ,AUTH_EMAIL_ERR,AUTH_PASSWORD_ERR,AUTH_OTHER_ERR } from '../actions/types';
const INTIL_STATE = {}
export default function(state=INTIL_STATE,action) {
    switch(action.type){
       case AUTH_USER: return {...state,authnticated:true}
       case DEAUTH_USER: return {...state,authnticated:false}
       case REG_ERR: return {...state,regError:'something went wrong :/',regSucc:null}
       case REG_SUCC: return {...state,regSucc:'something went right :-)',regError:null}
       case LOADING_REQ : return {...state,loading:true}
       case FINISHING_REQ : return {...state,loading:false}
       case AUTH_EMAIL_ERR : return {...state,emailError:action.payload}
       case AUTH_PASSWORD_ERR : return {...state,passwordError:action.payload}
       case AUTH_OTHER_ERR : return {...state,otherError:action.payload}
       default : return state
    }
}