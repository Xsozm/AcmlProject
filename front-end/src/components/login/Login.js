import React , {Component} from 'react';
import InputField from '../common/inputField/InputField';
import Button from '../common/button/Button';
import {connect} from 'react-redux';
import _ from 'lodash';
import ProbTypes from 'prop-types';
import './login.style.css'

class LogIn extends Component{
    state={email:'',password:'',passwordError:false,emailError:true,submitisClickable:true,otherErrors:false}

    static contextTypes={
        router:ProbTypes.object
    }

    componentWillMount(){
    }
    render() {
        const {containerStyle,usernameNoteStyle,emailFieldStyle,passwordFielStyle,submitBtnStyle,errorStyle} = style;
        const props = this.props;
        console.log(this.props.auth);
        return(
            <form  className=" containerStyle  container">
                <InputField style={emailFieldStyle} className="shadow-sm" isInvalidCond={this.props.auth.emailError ? this.props.auth.emailError[0] : ''  }  onTextChange={this.onEmailTextChange.bind(this)}  element={ <Button style={usernameNoteStyle}   text='@student.guc.edu.eg'/>
         } row='flex-row' height='40px'  type="text" value={this.state.email} placeholder="Username"  /> 
                <InputField 
                style={passwordFielStyle }
                onTextChange={this.onPasswordTextChange.bind(this)} 
                value={this.state.password} height='40px' type="text" className="shadow-sm" placeholder="Password"
                isInvalidCond={this.props.auth.passwordError ? this.props.auth.passwordError[0] : '' }
                /> 
                 { this.props.auth.otherError  ?  <span className="d-flex
                 justify-content-center align-self-center" style={errorStyle}>{this.props.auth.otherError}</span>:null}
                
             {   <Button style={submitBtnStyle} isLoading={this.props.auth.loading}
              onClick={this.onClickHandle}  
              hasborder={true} onClickDownColor='#0b51c1' 
              clickable={!this.props.auth.loading}  
              color='#4286f4' fontColor='#FFFFF'  text='LOGIN'/>  }
               
            </form>
        )
    }

    onClickHandle = () =>{
      // this.props.LogInUser({email:this.state.email,password:this.state.password});
    }
    

    onEmailTextChange(event){
        this.setState({email:event.target.value});
      }

      onPasswordTextChange(event){
        this.setState({password:event.target.value});
      }
      
    
}

const style={
    containerStyle:{
        padding:'2%',
        boxShadow:'0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)',
        maxWidth:'30%',
        minWidth:'300px',
        marginTop:'50%',
    },
    usernameNoteStyle:{
        borderLeft: '1px solid #ddd',
        
    },
    emailFieldStyle:{
      borderTopLeftRadius:'15px' ,
      borderBottomLeftRadius:'15px' ,
      borderBottomRightRadius:'50px' ,
      borderTopRightRadius:'50px' ,
      boxShadow: '0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)' ,
      overflow:'hidden',
     
    },
    passwordFielStyle:{
        marginTop:'8%',
        borderBottomRightRadius:'50px' ,
        borderTopLeftRadius:'15px' ,
      borderBottomLeftRadius:'15px' ,
        borderTopRightRadius:'50px' ,
        boxShadow: '0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)' ,
        overflow:'hidden'
        

    },
    submitBtnStyle:{
       marginTop:'5%',
       width:'100%',
       borderRadius:'8px',
        
      },
      errorStyle:{
        color: '#dc3545',
        fontFamily:'Lato, Calibri, Arial, sans-serif'
      }
}


function mapStateToProps(state){
    return {auth:state.auth}
}


export default connect(mapStateToProps,{LogIn})(LogIn);
