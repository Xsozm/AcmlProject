import React from 'react';
import {Component} from 'react';
import './notifications.style.css';
import NotificationsCard from './NotificationCard';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import socketIOClient from "socket.io-client";
import {fetchNewNotification,fetchNotifications} from '../../actions/index';
const SOCKET_URL='127.0.0.1:8890/';
const user = JSON.parse(localStorage.getItem("user"));
const socket = socketIOClient(SOCKET_URL);

class Notifications extends Component{
    componentDidMount(){
   
        socket.on(`user${user.id}`, data => {
            console.log(data);
            fetchNewNotification({NotifierName:data.NotifierName,ItemName:data.ItemName});
            this.props.fetchNotifications();
        } );
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
        return this.props.notifications.map(
            (notification)=>{
                return (<NotificationsCard  key={notification.NotifierName} userName={notification.NotifierName} itemName={notification.ItemName}/>)
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
