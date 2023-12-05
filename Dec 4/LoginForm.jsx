import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getEmail = (value) => {
    setEmail(value);
  };

  const getPassword = (value) => {
    setPassword(value);
  };

  return (
    <div className="border w-25 mt-5">
      <h2 className="text-primary text-center">Login</h2>
      <div className="mt-3">
        <label>Email</label>
        <input
          type='email'
          className='form-control'
          value={email}
          onChange={(e) => getEmail(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <label>Password</label>
        <input
          type='password'
          className='form-control'
          value={password}
          onChange={(e) => getPassword(e.target.value)}
        />
      </div>

      <div className="mt-3">
        <button className="btn btn-primary w-100" onClick={() => {
          console.log("email:", email);
          console.log("password:", password);
        }}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
