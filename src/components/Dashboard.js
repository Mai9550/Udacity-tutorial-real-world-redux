import React,{Component} from 'react' 
import {  connect  } from 'react-redux'
import {  handleinitialData  } from '../actions/shared'
import Dashboard from './Dashboard'

class Dashboard extends Component {
    componentDidMount(){
        this.props.dispatch(handleinitialData())
    }
    render(){
        return (
           <Dashboard/>
        )
    }

}

function mapStateToProps ({tweets}) {
    return {
        tweetIds:Object.keys(tweets).sort((a,b)=>tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard);