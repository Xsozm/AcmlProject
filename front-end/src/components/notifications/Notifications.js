import React from 'react';
import {Component} from 'react';
import './notifications.style.css'
class Notifications extends Component{
    state = {items:[]}

    componentWillReceiveProps(nextProps){
        if(this.props.searchQuery.items)
        this.setState({items:nextProps.searchQuery.items})
  
      }
    render() {
        return(
            <div>
                 <style>{'body { background-color: #F8F9F9}'}</style>
            <div className="itemsBox">
            {/*this.renderItems()*/}
            </div>
            </div>
        );
    }
    /* 
     renderItems = () =>{
        return this.state.items.map(
            (item)=>{
                console.log(item);
                return (<ItemCard key={item.name} name={item.name} place={item.place}/>)
            }
        )
    }
    */
   
}


    

export default Notifications;