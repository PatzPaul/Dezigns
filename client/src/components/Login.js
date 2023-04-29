import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';


const LoginPage=()=>{

  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')

  const loginUser=()=>{
    console.log(username);
    console.log(password);

    setUsername('')
    setPassword('')

  }
  return(
    <div className="container">
    <div className="form">
      <h1>Step Into The World Of Exquisite Taste</h1>
      <form>
        <Form.Group>
          <Form.Label>
            Username
          </Form.Label>
          <Form.Control type="text" placeholder="Your Username"
            value={username}
            name="username"
            onChange={(e) => { setUsername(e.target.value) }}
          />
        </Form.Group>
        <br></br>
        <Form.Group>
          <Form.Label>
            Password
          </Form.Label>
          <Form.Control type="password" placeholder="Your Password"
            value={password}
            name="password"
            onChange={(e) => { setPassword(e.target.value) }}
          />
        </Form.Group>
        <br></br>
        <Form.Group>
          <Button as="sub" variant="primary" onClick={loginUser}>Log In</Button>
        </Form.Group>
        <Form.Group>
          <small>Don't have an Account?<Link to="/signup">Join us</Link></small>
        </Form.Group>
        <br></br>

      </form>
    </div>
  </div>
  )
}

export default LoginPage