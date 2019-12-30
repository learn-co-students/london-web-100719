import React, { useState } from "react";

const AuthForms = ({ login, signup }) => {
  const [loginData, setLoginData] = useState({});
  const [signupData, setSignupData] = useState({});

  const handleLoginChange = e => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignupChange = e => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    login(loginData);
  };

  const handleSignupSubmit = e => {
    e.preventDefault();
    signup(signupData);
  };
  return (
    <>
      <form onSubmit={handleLoginSubmit}>
        <h2>log in</h2>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleLoginChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleLoginChange}
        />
        <input type="submit" />
      </form>
      or
      <form onSubmit={handleSignupSubmit}>
        <h2>sign up</h2>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleSignupChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleLoginChange}
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder="Password confirmation"
          onChange={handleLoginChange}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default AuthForms;
