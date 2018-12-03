import React from 'react';
import './search.style.css';
import ItemCard from './ItemCard';
import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchItems} from '../../actions/index'
class Search extends Component{
    state = {items:[]}
    componentWillMount(){
        console.log(this.props.params);
        this.props.searchItems(this.props.params.query);
        if(this.props.searchQuery.items)
        this.setState({items:this.props.searchQuery.items})
      
    }

    componentWillReceiveProps(nextProps){
        if(this.props.searchQuery.items)
        this.setState({items:nextProps.searchQuery.items})
  
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
                return (<ItemCard key={item.name} name={item.name} place={item.place} description={item.description}/>)
            }
        )
    }
}

function mapStateToProps(state){
    return {searchQuery:state.searchQuery}
}

    

export default connect(mapStateToProps,{searchItems})(Search);