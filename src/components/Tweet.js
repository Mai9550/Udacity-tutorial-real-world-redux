import React,{Component} from "react";
import { connect } from "react-redux";
import { formatTweet , formatDate } from '../utils/helpers';
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'


class Tweet extends Component{
    render(){
        console.log(this.props)
        return (
            <div className="tweet">
                
            </div>
        )

        
    }
}

function mapStateToProps ({authedUser,users,tweets},{id}) {
    const tweet = tweets[id]
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null
    return {
        authedUser,
        tweet:formatTweet(tweet,users[tweet.author],authedUser,parentTweet)
    }
}

export default connect(mapStateToProps)(Tweet)