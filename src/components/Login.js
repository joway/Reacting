import React from 'react'

class Login extends React.Component {
  render () {
    return (
      <form action="/login" method="post">
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
      </form>
    )
  }
}

export default Login
