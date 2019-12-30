import React, { useState, useEffect } from "react";
import "./App.css";
import AuthForms from "./components/AuthForms";
import PostForm from "./components/PostForm";
import API from "./adapters/API";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.validateUser()
      .then(user => setUser(user))
      .catch(console.error);
  }, []);

  // setUser(newUserFromBackend);

  const handleLogin = loginData => {
    API.login(loginData).then(user => setUser(user));
  };

  const handleSignup = () => {};

  return (
    <div className="App">
      <nav>
        <div>food blog</div>
        {user && <span>Hello, {user.email}!</span>}
      </nav>
      {!user ? (
        <AuthForms login={handleLogin} signup={handleLogin} />
      ) : (
        <PostForm postPost={API.postPost} />
      )}
    </div>
  );
}

export default App;
