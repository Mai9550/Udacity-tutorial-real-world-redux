import React,{Component} from "react";
import { connect } from "react-redux";
import { handleToggleTweet } from "../actions/tweets";
import { formatTweet , formatDate } from '../utils/helpers';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';



class Tweet extends Component{

    handleLike = (e) => {
        e.preventDefault()

        const {dispatch,tweet,authedUser} = this.props;



        dispatch(
            handleToggleTweet({
                id: tweet.id,
                hasLiked: tweet.hasLiked,
                authedUser
            })
        )
    }



        toParent = (e) =>{
            e.preventDefault()
        }

    render(){
        const { tweet } = this.props;

            if (tweet === null) {
                return <p>This Tweet doesn't exist</p>
            }

            const {
                name, avatar,timestamp, text, hasLiked, likes, replies, parent
            } = tweet
            
        return (
            <div className="tweet">
                <img 
                src={avatar}
                alt={`Avatar of ${name}`}
                className='avatar'
                />
            
             <div className="tweet-info">

                <span>{name}</span>
                    <div>{formatDate(timestamp)}</div>
                    {parent && (
                        <button className="replying-to" onClick={(e)=>this.toParent(e,parent.id)} >
                            Replying to @{parent.author}
                        </button>
                    )                   
                    }
                <p>{text}</p>
             </div>
             <div className='tweet-icons'>
             <div className='tweet-icon' />
                 
                 <button className='heart-button' onClick={this.handleLike}>
                      {hasLiked === true
                ? <ThumbUpIcon color='#e0245e' className='tweet-icon' />
                : <ThumbUpOutlinedIcon className='tweet-icon'/>}
                     </button>
                </div>
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