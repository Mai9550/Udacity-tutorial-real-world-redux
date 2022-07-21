import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleinitialData } from '../actions/shared'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard  from './Dashboard'
import { LoadingBar } from 'react-redux-loading'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'
class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleinitialData())
  }
  render() {
    return (
      <Router>
      <div>
        <LoadingBar/>
        {
          this.props.loading === true
          ? null
          : <div>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/tweet/:id" component={TweetPage} />
            <Route path="/new" component={NewTweet}/>

            </div>
       }
      </div>
      </Router>
    )
  }
}

function mapStateToProps({authedUser}){
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)