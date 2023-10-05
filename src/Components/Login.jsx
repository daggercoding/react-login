import React, { useState,useEffect } from 'react';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);
  
   
  useEffect(()=>{
    const timer=setTimeout(()=>{
      setFormIsValid(enteredEmail.includes("@")&&enteredPassword.length>=5)
    },500)
    return ()=>{clearInterval(timer)}
  },[enteredEmail,enteredPassword])

  function validateEmail(event) {
    setEnteredEmail(event.target.value);
  }

  function validatePassword(event) {
    setEnteredPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Clear email and password inputs
    setEnteredEmail('');
    setEnteredPassword('');
  }


 

  return (
    <form onSubmit={handleSubmit}>
      <label>Email: </label>
      <input
       id='email'
        type="text"
        name="EMAIL"
        value={enteredEmail}
        onChange={validateEmail}
        autoComplete="email"
      />

      <label>Password: </label>
      <input
       id='password'
        type="password"
        name="current-password"
        value={enteredPassword}
        onChange={validatePassword}
        autoComplete="current-password"
      />

      <button onClick={props.Home} disabled={!formIsValid}>
        LOGIN
      </button>
    </form>
  );
};

export default Login;
