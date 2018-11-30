import React,{Component} from 'react';
import Button from '../common/button/Button';
import requestIcon from '../../assets/Orion_add.png';
class ItemCard extends Component {
     render(){
         return(
             <div style ={styles.containerStyle} className = "shadow-sm  ">
            
                <div style={styles.detailsStyle}>
                    <h6>Name:Laptop Lenevo</h6>
                    <h6>Last Seen At:B1</h6>
                    
                </div>
                <div style={styles.TagContainerStyle} className="d-flex  flex-wrap flex-row"> 
                 </div>
                 <div className="d-flex flex-row align-items-end  bg-white  justify-content-center">
                     <div className=" p-2 " >
                     <Button hasborder={true} clickable={true} 
                    img={<div className=" align-items-center justify-content-center d-flex shadow-sm" style={{borderRadius: '50%',width:'30px',height:'30px'}}>
                     <img width="24px" height="24px" src={requestIcon} /></div>}/>
                     </div>
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
    TagContainerStyle :{
       width:'250px'
    },
    detailsStyle:{
        margin:'5%'
    },
    carouselStyle:{
        borderRadius:'10px',
        overflow:'hidden'
    },
    nameStyle:{
        textAlign:'center',
        width:'250px'
    }
}


export default ItemCard;