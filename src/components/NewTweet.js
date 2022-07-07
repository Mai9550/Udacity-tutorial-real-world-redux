import React, {Component} from 'react'
import { handleAddTweet } from '../actions/tweets'

class NewTweet extends Component {
    state={
        text:''
    }
    handleChange = (e) =>{
        const text = e.target.value
        this.setState(
            ()=>({
                text
            })
        )
    }
    handleSubmit = (e) => {
        e.preventDefault()
    
        const { text } = this.state;
        const { dispatch,id } = this.props;
        
        
       
    
        // todo: Add Tweet to Store
    
        console.log('New Tweet: ', text)
    
        this.setState(() => ({
          text: ''
        }))
      }
    render(){
        const {text} = this.state
        const tweetLeft = 280 - text.length
        return(
            <div>
                <h3>Compose new Tweet</h3>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <textarea
                    placeholder="what's happening?"
                    Value={text}
                    onChange={this.handleChange}
                    className='textarea'
                    maxLength={280}
                    />
                                {tweetLeft <= 40 && (
                        <div className='tweet-length'>
                        {tweetLeft}
                        </div>
                    )}
                    <button
                        className='btn'
                        type='submit'
                        disabled={text === ''}>
                        Submit
                    </button>
                </form>

            </div>
        )
    }
}

export default NewTweet