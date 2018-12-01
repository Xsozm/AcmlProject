import React from 'react';
import {Component} from 'react';
import './notifications.style.css';
import NotificationsCard from './NotificationCard';
class Notifications extends Component{
    state = {notifications:[{userName:'test1',itemName:'test1'},{userName:'test2',itemName:'test2'},{userName:'test3',itemName:'test3'},{userName:'test4',itemName:'test4'}]}

    componentWillReceiveProps(nextProps){
        if(this.props.searchQuery.items)
        this.setState({items:nextProps.searchQuery.items})
  
      }
    render() {
        return(
            <div>
                 <style>{'body { background-color: #F8F9F9}'}</style>
            <div className="containerStyle container">
            {this.renderItems()}
            </div>
            </div>
        );
    }
    
     renderItems = () =>{
        return this.state.notifications.map(
            (notification)=>{
                console.log(notification);
                return (<NotificationsCard key={notification.userName} userName={notification.userName} itemName={notification.itemName}/>)
            }
        )
    }
    
   
}


    

export default Notifications;