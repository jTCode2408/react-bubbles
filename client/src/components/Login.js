import React from "react";
import axios from 'axios';

class LoginForm extends React.Component{
  state ={
    values:{
      username:'',
      password:''
    }
  };

handleChange = e =>{
  this.setState({
    values:{
      ...this.state.values,
      [e.target.name]: e.target.value
    }
  });
};


  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

login =e =>{
  e.preventDefault();

  axios
  .post('http://localhost:5000/api/login', this.state.values)
  .then(res =>{
    // console.log("LOGIN",res);
    localStorage.setItem('token', res.data.payload);
    this.props.history.push('/bubblepage');
  })
  .catch(err=>console.log(err))
};

render(){

return(
  <div className ="login-cont">
     <h1>Welcome to the Bubble App!</h1>
      <h2>LOGIN</h2>
      <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.values.username}
            onChange={this.handleChange}
            placeholder = "username"
          />
          <input
            type="password"
            name="password"
            value={this.state.values.password}
            onChange={this.handleChange}
            placeholder="password"
          />
        
          <button>ENTER</button>
          </form>

    </div>

);
}
}

export default LoginForm;
