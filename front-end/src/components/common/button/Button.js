import React from 'react';
//import Loading from '../../../assets/Rolling-1s-200px.svg'
//import './Button.style.css'


const Button = ({text,img,borderRadius,color,fontColor,onClick,className,hasborder,style,clickable,onClickDownColor,isLoading}) =>{
  {clickable ? styles.btnStyle={... styles.btnStyle,cursor:'pointer'}:styles.btnStyle={... styles.btnStyle,cursor:' '}}
  let  colorStyle = color ? color : '';
    return(

            <div
            onClickCapture={onClick} 
            onTouchStart = {
              (e)=>{
              if(hasborder && clickable){
                e.currentTarget.className=` d-flex justify-content-center ${className}`;
                e.currentTarget.style.backgroundColor=onClickDownColor; 
              }
                }   
            }
            onTouchEnd = {
              
              (e)=>{
                if(hasborder && clickable){
                  e.currentTarget.style.backgroundColor=colorStyle;
                }   
              }
            } 
            onMouseDownCapture={
                (e)=>{
                  if(hasborder&& clickable){
                  e.currentTarget.className=`d-flex justify-content-center ${className}`;
                  e.currentTarget.style.backgroundColor=onClickDownColor;
                  }
                }   
            }
            onMouseUpCapture={
              (e)=>{
                if(hasborder&& clickable){
            
                {styles.btnStyle={... styles.btnStyle,backgroundColor:colorStyle}} 
                e.currentTarget.style.backgroundColor=colorStyle;

              }   
            }
            }
        
            style={{... styles.btnStyle,backgroundColor:color,fontColor:fontColor,...style}} className={`${className} d-flex justify-content-center`}>
            
            {isLoading ? <img style={{width:'24px',height:'24px',fill:'#FFFF'}} src={Loading} /> : 
            img ?img:
            <font face={'Lato, Calibri, Arial, sans-serif'} size='3' color={fontColor}>{text}</font>}
          </div>
    )
}

const styles = {
    btnStyle:{
        cursor:'pointer',
        userSelect: 'none',
        paddingTop: '0.5rem ',
        paddingRight: '0.7rem ',
        paddingBottom: '0.5rem ',
        paddingLeft: '0.7rem ',
        fontWeight: '700',
        fontSize:'18'
       

    },
    containerStyle:{
      float:'left',
      
    }
}

export default Button;