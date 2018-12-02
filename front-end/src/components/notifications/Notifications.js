import React from 'react';
import {Component} from 'react';
import './notifications.style.css';
import NotificationsCard from './NotificationCard';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchNewNotification,fetchNotifications} from '../../actions/index';
class Notifications extends Component{

    componentWillMount(){
        this.props.fetchNotifications();
       
      }
    render() {
        return(
            <div>
                 <style>{'body { background-color: #F8F9F9}'}</style>
            <div onClick={()=>{this.props.fetchNewNotification();console.log(this.props);}} className="containerStyle container">
            {this.renderItems()}
            </div>
            </div>
        );
    }
    
     renderItems = () =>{
        return this.props.notifications.map(
            (notification)=>{
                console.log(notification);
                return (<NotificationsCard  key={notification.userName} userName={notification.userName} itemName={notification.itemName}/>)
            }
        )
    }
    
   
}

function mapStateToProps(state){
    return {notifications:state.notifications.notifications}
}

function mapDispatchtoProps(dispatch){
    return bindActionCreators({fetchNewNotification:fetchNewNotification,fetchNotifications:fetchNotifications},dispatch);

}


    

export default connect(mapStateToProps,mapDispatchtoProps)(Notifications);