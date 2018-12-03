import React,{Component} from 'react';
class NotificationCard extends Component {
     render(){
         return(
             <div style ={styles.containerStyle} className = " d-flex justify-content-center shadow-sm  ">
            
                <div style={styles.detailsStyle}>
                    <h6>User {this.props.userName} has request your item {this.props.itemName}</h6>
                    
                </div>
             </div>
             
         )
     }
}

const styles = {
    containerStyle :{
        margin:'20px',
        border: '1px solid #ddd',
        backgroundColor:'white',
        borderRadius: '10px',
        overflow:'hidden',   
    },
    detailsStyle:{
        margin:'5%'
    }
}


export default NotificationCard;