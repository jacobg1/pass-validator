import React, { Component } from 'react'
import PassValidator from './PassValidator'

class Home extends Component {
  render() {
    return (
      <div>
      <a href="/">Home</a>
      <h1>Enter your Password</h1>
      <PassValidator />
      </div>
    )
  }
}

export default Home
