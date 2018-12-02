import {FETCH_SEARCH_ITEMS,FETCH_NOTIFICATIONS,ADD_NEW_NOTIFICATION} from './types';
import axios from 'axios';
const BASE_URL = 'http://172.20.10.4:8000/api';

export function searchItems(query){
    return (dispatch) =>{
      //  dispatch({type:LOADING_REQ})
                dispatch({type:FETCH_SEARCH_ITEMS,payload:[{name:'1',place:'1'},{name:'2',place:'2'},{name:'3',place:'3'},{name:'4',place:'4'}]})
            }
}

export function submitItem(item){
    return (dispatch) =>{
        console.log(item);
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
               // dispatch({type:'REG_COMPELE',payload:res.data});
              }
      
      ).catch(
              (e)=>{
                console.log(e);
                  //if(e.response.data.errors){
                    
                    //dispatch({type:'REG_FAILED',payload:res.data});
                    /*
                      if (e.response.data.errors.email) {
                          this.setState({type:REG_EMAIL_ERR,emailErrorMsg:e.response.data.errors.email[0]})
                         }
                          if (e.response.data.errors.password) {
                           this.setState({type:REG_EMAIL_ERR,passwordErrorMsg:e.response.data.errors.password[0]})
                         }
                          if(e.response.data.errors.username){
                          this.setState({utype:REG_USERNAME_ERR,usernameErrorMsg:e.response.data.errors.username[0]})
                         }
                          if(e.response.data.errors.mob){
                          this.setState({type:REG_MOBILE_ERR,mobileErrorMsg:e.response.data.errors.mob[0]})
                         }
                        */
                    // }
                     
              }
          )
      .then(
          ()=>{

              //this.setState({loading:false,submitisClickable:true});
          }
          ) 
        }
  
}