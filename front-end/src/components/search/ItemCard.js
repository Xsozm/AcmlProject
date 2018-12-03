import React,{Component} from 'react';
import Button from '../common/button/Button';
import requestIcon from '../../assets/Orion_add.png';
class ItemCard extends Component {
     render(){
         return(
             <div style ={styles.containerStyle} className = "shadow-sm  d-flex">
            
                <div style={styles.detailsStyle}>
                <h6>({this.props.found?"found":"lost"})</h6>
                    <h6>name:{this.props.name}</h6>
                    <h6>place:{this.props.place}</h6>
                    <div > 
                        {this.props.description}
                 </div>
                    
                </div>
               
                 <div className="d-flex flex-row align-items-end  bg-white  justify-content-center">
                     <div className=" p-5 " >
                     <Button hasborder={true} clickable={true} 
                    img={<div className=" align-items-center justify-content-center d-flex shadow-sm" style={{margin:'1%',borderRadius: '50%',width:'30px',height:'30px'}}>
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