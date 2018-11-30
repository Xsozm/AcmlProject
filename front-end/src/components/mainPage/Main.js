import React , {Component} from 'react';
import InputField from '../common/inputField/InputField';
import Button from '../common/button/Button'
import searchIcon from '../../assets/Orion_search.png';
class Main extends Component {
  

    constructor(props){
     super(props)
     this.state = {clientHeighth:document.documentElement.clientHeight,searchText:''};
    }

    onSearchTextChange(event){
      this.setState({searchText:event.target.value});
    }

    render (){
        return (
        <div >
            <div style={styles.containerStyle} className = " d-flex align-items-center justify-content-center  flex-column  ">
                <div className="align-self-center m-2">
                    <h1> lost your shit ? </h1>
                    <h3> you may find it here </h3>
                </div>
                <InputField minWidth="300px"  style={styles.searchBoxStyle} inputContainerClassName='shadow-sm' row='flex-row' height='40px' width="50%" type="text" placeholder="Search a lost item"
                element={
                    <Button hasborder={true} clickable={true} /* className='d-flex' style={{border: '1px solid #eee'}} */ 
                    img={<div className=" align-items-center justify-content-center d-flex shadow-sm" style={{borderRadius: '50%',width:'30px',height:'30px'}}>
                     <img width="24px" height="24px" src={searchIcon} /></div>}/>
                }
                />    
        </div >
        </div>)
    }

}


const styles = {
    containerStyle: {
        height:'450px',
    },
    searchBoxStyle: {
        borderRadius:'50px' ,
        overflow:'hidden'
    },
    briefResultsStyle:{
      zIndex:'1'
    },
    inutFieldStyle:{
        border: '1px solid #ddd',
        borderRadius:'5px',
        overflow:'hidden',
     

    }
  }

export default Main;