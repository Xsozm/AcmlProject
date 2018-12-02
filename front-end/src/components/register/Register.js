import React , {Component} from 'react';
import InputField from '../common/inputField/InputField';
import Button from '../common/button/Button';
//import {Register} from '../../actions/index'
import {connect} from 'react-redux';
import ProbTypes from 'prop-types';
import './register.style.css'

class RegisterComp extends Component{
    state={username:'',password:'',email:'',mobile:'',
    emailError:false,
    mobileError:false,
    usernameError:false,
    emailErrorMsg:'',
    usernameErrorMsg:'',
    mobileErrorMsg:'',
    passwordError:false,
    passwordErrorMsg:'',
    loading:false,
    submitisClickable:true,
    otherErrors:false,
    otherErrorsMsg:''}

    static contextTypes={
        router:ProbTypes.object
    }

    componentWillMount(){
    }
    render() {
        const {containerStyle,usernameNoteStyle,usernameContainerStyle,passwordContainerStyle,submitBtnStyle,errorStyle} = style;
        return(
            <form style={containerStyle} className="containerStyle container">

                    <InputField   inputContainerClassName="usernameContainerStyle" invalidText={this.state.emailErrorMsg} isInvalidCond={this.state.emailError} onTextChange={this.onEmailTextChange.bind(this)}  element={ <Button style={usernameNoteStyle}  text='@student.guc.edu.eg'/>
                } row='flex-row' height='40px'  type="text" value={this.state.email} placeholder="Email"  /> 

                <InputField  inputContainerClassName=" passwordContainerStyle " invalidText={this.state.usernameErrorMsg} isInvalidCond={this.state.usernameError} onTextChange={this.onUsernameTextChange.bind(this)} value={this.state.username} height='40px'  type="text"placeholder="Username"  /> 
                 <InputField  inputContainerClassName=" passwordContainerStyle " invalidText={this.state.passwordErrorMsg} isInvalidCond={this.state.passwordError} onTextChange={this.onPasswordTextChange.bind(this)} value={this.state.password} height='40px'  type="text"  placeholder="Password"  /> 
                 <InputField inputContainerClassName="passwordContainerStyle " invalidText={this.state.mobileErrorMsg} isInvalidCond={this.state.mobileError} onTextChange={this.onMobileTextChange.bind(this)} value={this.state.mobile} height='40px'  type="text"  placeholder="Mobile"  /> 
                 { this.state.otherErrors  ?  <span className="align-self-center" style={errorStyle}>{this.state.otherErrorsMsg}</span>:null}
                <div style={submitBtnStyle}>
             {   <Button isLoading={this.state.loading} className="shadow-sm" onClick={this.onClickHandle}  hasborder={true} onClickDownColor='#0b51c1' clickable={this.state.submitisClickable}  color='#4286f4' fontColor='#FFFFF'   className=" d-flex d-flex align-self-start " text='SIGNUP'/>  }
               </div>
            </form>
        )
    }

    onClickHandle = () =>{
     // console.log(this.props.LogInUser({email:this.state.username,password:this.state.password}));  
      const promise = this.props.Register({username:this.state.username,password:this.state.password,email:this.state.email,mob:this.state.mobile}).payload;
      this.setState({loading:true,submitisClickable:false});
      promise.then( 
          (e)=>{
              console.log(e.data);
           this.setState({otherErrorsMsg:e.data,otherErrors:true});
            }
    
    ).catch(
            (e)=>{
                console.log(e.response);
                /* if(e.response.data.errors){
                    this.setState({otherErrors:false});
                    if (e.response.data.errors.email) {
                        this.setState({emailError:true,emailErrorMsg:e.response.data.errors.email[0]})
                       }
                        if (e.response.data.errors.password) {
                         this.setState({passwordError:true,passwordErrorMsg:e.response.data.errors.password[0]})
                       }
                        if(e.response.data.errors.username){
                        this.setState({usernameError:true,usernameErrorMsg:e.response.data.errors.username[0]})
                       }
                        if(e.response.data.errors.mob){
                        this.setState({mobileError:true,mobileErrorMsg:e.response.data.errors.mob[0]})
                       }
                   }
                   else{
                    console.log(e.response);
                    this.setState({emailError:false,passwordError:false,usernameError:false,mobileError:false});
                    if(e.response.data.error){
                      this.setState({emailError:false,passwordError:false,otherErrors:true,otherErrorsMsg:e.response.data.error});
                    }
                    else{
                      this.setState({emailError:false,passwordError:false,otherErrors:true,otherErrorsMsg:e.response.data});
                    }
                
                }
            } */
            } 
        )
    .then(
        ()=>{
            this.setState({loading:false,submitisClickable:true});
        }
        ) 
    }
    

    onUsernameTextChange(event){
        this.setState({username:event.target.value});
      }

      onPasswordTextChange(event){
        this.setState({password:event.target.value});
      }

      onEmailTextChange(event){
        this.setState({email:event.target.value});
      }

      onMobileTextChange(event){
        this.setState({mobile:event.target.value});
      }
      
    
}

const style={
    containerStyle:{
        marginTop:'10%',
       padding:'2%',
       boxShadow:'0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)',
       maxWidth:'30%',
       minWidth:'300px'
   },
    usernameNoteStyle:{
        borderLeft: '1px solid #ddd',
    },
    usernameContainerStyle:{
      //  marginTop:'10%',
      borderTopLeftRadius:'15px' ,
      borderBottomLeftRadius:'15px' ,
      borderBottomRightRadius:'50px' ,
      borderTopRightRadius:'50px' ,
      boxShadow: '0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)' 
    },
    passwordContainerStyle:{
        marginTop:'8%',
        borderTopLeftRadius:'15px' ,
      borderBottomLeftRadius:'15px' ,
      borderBottomRightRadius:'50px' ,
      borderTopRightRadius:'50px' ,
      boxShadow: '0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)' ,
      overflow:'hidden'
        

    },
    submitBtnStyle:{
       marginTop:'5%'
        
      },
      errorStyle:{
        color: '#dc3545',
        fontFamily:'Lato, Calibri, Arial, sans-serif'
      }
}





export default connect(null)(RegisterComp);
