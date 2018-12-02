import {FETCH_SEARCH_ITEMS,FETCH_NOTIFICATIONS,ADD_NEW_NOTIFICATION} from './types';


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