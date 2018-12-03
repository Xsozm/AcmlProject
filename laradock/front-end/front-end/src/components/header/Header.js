import React, { Component } from 'react';
import PropTypes  from 'prop-types';
import Button from '../common/button/Button';
import InputField from '../common/inputField/InputField';
import searchIcon from '../../assets/Orion_search.png'
import sideBarArrow from '../../assets/Orion_angle-down.png'
import {connect} from 'react-redux';
import './Header.style.css'
import {bindActionCreators} from 'redux';
import {searchItems} from '../../actions/index';

class Header extends Component {
    state = {loggedin:false,sideBarOpen:false,clientWidth:document.documentElement.clientWidth,searchText:''};
    static contextTypes ={
      router:PropTypes.object
    }

    componentWillMount(){
      window.addEventListener('resize', this.resizeScreen.bind(this));
    }

    componentWillReceiveProps(nextProps){
      console.log(nextProps);
      nextProps.auth.authnticated ?  this.setState({loggedin:true}):this.setState({loggedin:false})

    }
      resizeScreen(){
        this.setState({clientWidth:document.documentElement.clientWidth});
      }

      onSearchTextChange = (event) => {
        this.setState({searchText:event.target.value});
      }
  
      onClickSearchButton = () => {
          this.props.searchItems(this.state.searchText);
          this.context.router.push(`/search/${this.state.searchText}`);
      }


    renderSearchBox(){
     return(
        <InputField onTextChange={this.onSearchTextChange} input={this.state.searchText}  width="400px" minWidth="100px"  inputContainerClassName='searchBox shadow-sm' element={
          <Button onClick={this.onClickSearchButton} hasborder={true} clickable={true}
          img={<div className=" align-items-center justify-content-center d-flex shadow-sm" style={{borderRadius: '50%',width:'30px',height:'30px'}}>
           <img width="24px" height="24px" src={searchIcon} /></div>}/>
      } row='flex-row' height='40px'  type="text" placeholder="Search a lost item"  />    
     );
    }

    redirectLogin = () =>{
      this.context.router.push('/login');
    }

    redirectSignup = () =>{
      this.context.router.push('/signup');
    }

    redirectNotifications = () =>{
      this.context.router.push('/notifications');
    }

  render() {
     const {router:{location:{pathname}}}=this.context;
    return (
      <div className="headerContainer d-flex flex-column">
       
      <nav className="header align-items-center  d-flex flex-row">
      {this.state.clientWidth <=600 ?<Button onClick={this.openSideBar} img={<div className=" align-items-center justify-content-center d-flex shadow-sm" style={{borderRadius: '50%',width:'30px',height:'30px'}}>
           <img width="24px" height="24px" src={sideBarArrow} /></div>}  clickable={true} hasborder={true} style={styles.buttonsStyle} className={this.state.sideBarOpen?'sidebarButtonDown':'sidebarButtonUp'} text='LOGIN'/>:null}
        {pathname=="/" ? '' : this.renderSearchBox()}  
          {!this.props.auth.authnticated? 
           <div  style={styles.buttonsBoxContainer}  className='buttonsBoxContainer d-flex flex-row-reverse col-sm'>
            <Button onClick={this.redirectLogin}  clickable={true} hasborder={true} style={styles.buttonsStyle} className='' text='LOGIN'/>
            <Button onClick={this.redirectSignup} clickable={true} hasborder={true} style={styles.buttonsStyle} className=''  text='SIGNUP'/>
           
          </div> :
           <div  className='buttonsBoxContainer d-flex flex-row-reverse col-sm'>
          <Button onClick={this.logout} clickable={true} hasborder={true} style={styles.buttonsStyle} className='' text='LOGOUT'/>
          <Button onClick={this.redirectNotifications} clickable={true} hasborder={true} style={styles.buttonsStyle} className=''  text='NOTIFICATIONS'/>
          </div> }  
    </nav>
   {this.state.clientWidth <=600 ? <div  className={`${this.state.sideBarOpen?'headerMobile':'headerMobileHidden'} align-items-center d-flex flex-row`}>
          {!this.props.auth.authnticated?
          <div style={styles.buttonsBoxContainer} className='d-flex flex-row-reverse col-sm'>
            <Button onClick={this.redirectLogin}  clickable={true} hasborder={true} style={styles.buttonsStyle} className='' text='LOGIN'/>
            <Button onClick={this.redirectSignup} clickable={true} hasborder={true} style={styles.buttonsStyle} className=''  text='SIGNUP'/>
          </div>:
           <div style={styles.buttonsBoxContainer} className='d-flex flex-row-reverse col-sm'>
          <Button onClick={this.logout} clickable={true} hasborder={true} style={styles.buttonsStyle} className='' text='LOGOUT'/>
          <Button onClick={this.redirectNotifications} clickable={true} hasborder={true} style={styles.buttonsStyle} className=''  text='NOTIFICATIONS'/>
          
          </div> }  
    </div>:null}
    </div>
    );
  }

  logout = () =>{
    localStorage.clear();
    this.setState({loggedin:false});
  }

  openSideBar = (e) =>{

     this.setState({sideBarOpen:!this.state.sideBarOpen})
    }
}



const styles = {
    headerStyle: {
      border: '1px solid #eee',
      backgroundColor:'#FFFF',
      paddingTop:'0.5%',
      paddingBottom:'0.5%',
    
    },
    searchBoxStyle:{
      marginLeft:'5%',
      border: '1px solid #ddd',
       borderBottomRightRadius:'50px' ,
        borderTopRightRadius:'50px' ,
        overflow:'hidden'
    },
    buttonsBoxContainer:{
      marginRight:'1%',
    
    },
 
}
function mapStateToProps(state){
  return {auth:state.auth}
}

function mapDispatchtoProps(dispatch){
    return bindActionCreators({searchItems},dispatch);

}

export default connect(mapStateToProps,mapDispatchtoProps)(Header);
