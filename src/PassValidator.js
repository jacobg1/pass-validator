import React, { Component } from 'react'
import Login from './Login'

class PassValidator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      password: '',
      passConf: '',
      email: '',
      login: false
    }
  }
  handlePass (x) {
    this.setState({
      password: x.target.value
    })
  }
  handlePassConf (y) {
    this.setState({
      passConf: y.target.value
    })
  }
  handleEmail (z) {
    this.setState({
      email: z.target.value
    })
  }
  submitPass (evt) {
    evt.preventDefault()
    let string = '@'
    console.log('pass ' + this.state.password)
    console.log('conf: ' + this.state.passConf)
    console.log('email: ' + this.state.email.length)
    console.log(this.state.login);
    if (this.state.email.indexOf(string) === -1) {
      alert('Email must be valid')
    } else if (this.state.email.length < 6) {
      return (<div className='wrong'> <h1>Wrong</h1></div>)
    } else if (!this.state.passConf) {
      alert('please enter both passwords')
    } else if (this.state.password.length < 6) {
      alert('password not long enough')
    } else if (this.state.password === this.state.passConf) {
      return this.setState({login: true})
    } else {
      alert('passwords dont match')
    }
  }
  render () {
    if (this.state.login) {
      return (
        <Login />
      )
    } else {
      return (

        <div className=''>
          <form onSubmit={(evt) => this.submitPass(evt)}>
            <input
              onChange={(evt) => this.handleEmail(evt)}
              value={this.state.email}
              type='text'
              placeholder='enter email'
        />
            <input
              onChange={(evt) => this.handlePass(evt)}
              value={this.state.password}
              type='text'
              placeholder='enter password'
          />
            <input
              onChange={(evt) => this.handlePassConf(evt)}
              value={this.state.passConf}
              type='text'
              placeholder='confirm password'
          />
            <button type='submit'>Enter</button>
          </form>
          <p>working</p>
        </div>
      )
    }
  }
}

export default PassValidator
