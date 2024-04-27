import React, { useState } from "react";
import Header from "../components/Navbar/Header";
import './styles.css';

const Signup = ({ searchInput, handleSearchInput }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    // Reset form fields
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <Header searchInput={searchInput} handleSearchInput={handleSearchInput} />
      <div className="signup-container">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Enter your name..."
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              placeholder="Enter your username..."
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Create password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Signup</button>
        </form>
      </div>
    </>
  );
};

export default Signup;