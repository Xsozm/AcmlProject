import React from 'react';
import './search.style.css';
import ItemCard from './ItemCard';
import {Component} from 'react';
class Search extends Component{
    state = {items:[{name:'1',place:'1'},{name:'2',place:'2'},{name:'3',place:'3'},{name:'4',place:'4'}]}
    componentWillMount(){
      
    }
    render() {
        return(
            <div>
                 <style>{'body { background-color: #F8F9F9}'}</style>
            <div className="itemsBox">
            {this.renderItems()}
            </div>
            </div>
        );
    }

    renderItems = () =>{
        return this.state.items.map(
            (item)=>{
                console.log(item);
                return (<ItemCard name={item.name} place={item.place}/>)
            }
        )
    }
}

    

export default Search;