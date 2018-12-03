
import {FETCH_SEARCH_ITEMS,FETCH_NOTIFICATIONS,
    ADD_NEW_NOTIFICATION,REG_ERR,REG_SUCC,AUTH_EMAIL_ERR,AUTH_OTHER_ERR,AUTH_PASSWORD_ERR,LOADING_REQ,FINISHING_REQ,AUTH_USER} from './types';
import axios from 'axios';
import {browserHistory} from 'react-router';
const BASE_URL = 'http://192.168.43.128:8000/api';
const  headers = {
    'Access-Control-Allow-Origin': '*',
    'Accept-Version': 1,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers':' Origin, Content-Type, X-Auth-Token',
    'Authorization': `Bearer ${localStorage.getItem('token')}` }
   


export function searchItems(query){
    const URL = BASE_URL+'/items/search';
    const req = axios.get(`${URL}/${query}`);
    return (dispatch) =>{
      req.then(
        (res)=>{
            console.log(res);
            dispatch({type:FETCH_SEARCH_ITEMS,payload:res.data})
        }
      ).catch(
          (e)=>{
            console.log(e);
          }
      )
               
            }
}

export function submitItem(item){
    const URL = BASE_URL+'/items';
    const req = axios({ method: 'POST', url: URL, headers: headers, data: item })
    return (dispatch) =>{
      req.then(
          (res)=>{
            console.log(res);
          }
      )
    }
  
}

export function fetchNotifications(){
    return (dispatch) =>{
                  dispatch({type:FETCH_NOTIFICATIONS,payload:[{userName:'1',itemName:'1'},{userName:'2',itemName:'2'},{userName:'3',itemName:'3'},{userName:'4',itemName:'4'}]});
              }
}

export function fetchNewNotification(notification){
    return (dispatch) =>{
        dispatch({type:ADD_NEW_NOTIFICATION,payload:notification})
    }
}


export function Register(data){
    const URL = BASE_URL+'/auth/register';
    const req = axios.post(URL,data);
    console.log(data);

    return (dispatch) =>{
       // dispatch({type:LOADING_REQ})
        req.then( 
            (res)=>{
                console.log(res);
                dispatch({type:REG_SUCC});
              }
      
      ).catch(
              (e)=>{
               
                  if(e.response.data.errors){
                    dispatch({type:REG_ERR});
                     }
                     
              }
          )
      
        }
  
}

export function LogInUser(data){
    const URL = BASE_URL+'/auth/login';
    const req = axios.post(URL,data);
    return (dispatch) =>{
        dispatch({type:LOADING_REQ})
        req.then(
            (res)=>{
                localStorage.setItem('token', res.data.access_token);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                browserHistory.push('/');
                 dispatch({type:AUTH_USER});

            }
        ).catch((res)=>{
           let  errors = res.response.data.errors;
           if(errors){
                console.log(res.response.data);
                if(errors.email){
                    dispatch({type:AUTH_OTHER_ERR,payload:''})
                    dispatch({type:AUTH_EMAIL_ERR,payload:errors.email})
                }
                if(errors.password){
                    dispatch({type:AUTH_OTHER_ERR,payload:''})
                    dispatch({type:AUTH_PASSWORD_ERR,payload:errors.password})
                }
           }
            else{
                dispatch({type:AUTH_PASSWORD_ERR,payload:''})
                dispatch({type:AUTH_EMAIL_ERR,payload:''})
                dispatch({type:AUTH_OTHER_ERR,payload:res.response.data.error})
            }
        }).then(()=>{
            dispatch({type:FINISHING_REQ})
        })
    }
}
