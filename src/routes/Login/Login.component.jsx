import React, { useState } from "react";
import './Login.styles.scss';
import { signInAuthWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [loginFields, setLoginFields] = useState({
    email: '',
    password: '',
  });
  const { email, password } = loginFields;
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setLoginFields({ ...loginFields, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthWithEmailAndPassword(email, password);
      navigate('/');
    } catch (error) {
      if (error.code === 'auth/invalid-credential') {
        alert('Incorrect Email or Password');
      }
      if (error.code === 'auth/wrong-password') {
        alert('Wrong Password');
      }
      console.log(error.code);
    }
  }

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-image">
          <div className="user-icon"></div>
        </div>
        <div className="login-form">
          <h2>Member Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={onChangeHandler}
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={onChangeHandler}
              required
            />
            <div className="Login">
              <Link className="login-link" to="/forgot-password">Forgot your password?</Link>
              <button type="submit" className="login-button">
                LOGIN
              </button>
            </div>
          </form>
          <div className="login-links">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;