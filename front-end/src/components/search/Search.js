import React from 'react';
import './search.style.css';
import ItemCard from './ItemCard'

const Search = (props) =>{
    return(
        <div>
             <style>{'body { background-color: #F8F9F9}'}</style>
        <div className="itemsBox">
        <ItemCard/> <ItemCard/> <ItemCard/> <ItemCard/> <ItemCard/> <ItemCard/> <ItemCard/> <ItemCard/> <ItemCard/> <ItemCard/>
        </div>
        </div>
    );
}

const styles = {
    SnackStyle :{
        position: 'absolute',
        zIndex:'1000 ',
        backgroundColor:"#FDFEFE "
      
    },
    SearchBoxView:{
       marginLeft:"1%",
      
    },
}

export default Search;