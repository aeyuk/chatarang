import React, { Component } from 'react'

import './App.css'
import SignIn from './SignIn'
import Main from './Main'

class App extends Component {
  state = {
    user: {},
    channel: 'general',
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      this.setState({ user })
    }
  }

  signedIn = () => {
    return this.state.user.uid
  }

  handleAuth = (user) => {
    this.setState({ user })
    localStorage.setItem('user', JSON.stringify(user))
  }

  signOut = () => {
    this.setState({ user: {} })
    localStorage.removeItem('user')
  }

  setChannel = (channel) => {
    this.setState({ channel })
  }

  render() {
    return (
      <div className="App">
        {
          this.signedIn()
            ? <Main user={this.state.user} signOut={this.signOut} channel={this.state.channel} setChannel={this.setChannel}/>
            : <SignIn handleAuth={this.handleAuth} />
        }
      </div>
    )
  }
}

export default App