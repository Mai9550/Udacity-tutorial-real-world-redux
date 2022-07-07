import React,{Component} from "react";
import {connect} from 'react-redux'

class TweetPage extends Component {
    render(){
        return(
            <div>

            </div>
        )
    }
}
function mapStateToProps({authedUser,tweets,users},props){

    const{id}=props.match.params
        return {
            id,
            replies:!tweets[id]
            ?[]
        }
}

export default connect()(TweetPage);