import React, {Component} from 'react'

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
    
        const { text } = this.state
    
        // todo: Add Tweet to Store
    
        console.log('New Tweet: ', text)
    
        this.setState(() => ({
          text: ''
        }))
      }
    render(){
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
                </form>

            </div>
        )
    }
}

export default NewTweet