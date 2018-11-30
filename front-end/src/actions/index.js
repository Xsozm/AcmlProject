import {FETCH_SEARCH_ITEMS} from './types';
export function searchItems(query){
    return (dispatch) =>{
      //  dispatch({type:LOADING_REQ})
                dispatch({type:FETCH_SEARCH_ITEMS,payload:[{name:'1',place:'1'},{name:'2',place:'2'},{name:'3',place:'3'},{name:'4',place:'4'}]})
            }
}