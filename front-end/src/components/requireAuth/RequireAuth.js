import React , {Component} from 'react';
import {connect} from 'react-redux';
import { browserHistory} from 'react-router';

export default function (compositeComponent) {
    class RequireAuth extends Component{
        componentWillMount(){
            if(!this.props.auth.authnticated){
                browserHistory.push('/');
            }
        }
        componentWillUpdate(nextProps){
            if(!nextProps.auth.authnticated){
                browserHistory.push('/');
            }
        }
        render(){
            return(
                <compositeComponent {...this.props} />
            )
        }
    }

    function mapStateToProps(state){
        return {auth:state.auth}
    }

    return connect(mapStateToProps)(RequireAuth);

}