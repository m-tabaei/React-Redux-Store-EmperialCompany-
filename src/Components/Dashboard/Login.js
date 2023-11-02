import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      setLoggedIn(true);
      navigate('/dashboard');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (!loggedIn) {
    return (
      <div className="login  ">
        <Form className="login-form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username or Email address </br>
This panel for text ,you can use General Username: admin && passWord: admin to login
</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control

              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="login-checkbox" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Save Password" />
          </Form.Group>
          <Button
            type="submit"
            onClick={handleLogin}
            className="button-login text-capitalize m-2"
            style={{ width: '150px' }}
          >
            Login
          </Button>
          <Button
            onClick={handleLogout}
            className="button-logout text-capitalize m-2"
            style={{ width: '150px' }}
          >
            Logout
          </Button>
        </Form>
      </div>
    );
  }

  return (
    <div className="d-block text-center">
      <p>Enter your Account</p>
    </div>
  );
}

export default Login;
