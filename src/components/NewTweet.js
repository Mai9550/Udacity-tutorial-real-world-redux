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
    render(){
        return(
            <div>
                New Tweet
            </div>
        )
    }
}

export default NewTweet