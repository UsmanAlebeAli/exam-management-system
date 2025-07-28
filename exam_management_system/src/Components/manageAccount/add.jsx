import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Add() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });
  const navigate = useNavigate();
  const setUserDetails = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleButton = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/add-account", user);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>add user</h1>
      <div className="form">
        <input
          type="text"
          placeholder="firstname"
          name="firstName"
          onChange={(e) => setUserDetails()}
        />
        <input
          type="text"
          placeholder="lastname"
          name="lastName"
          onChange={(e) => setUserDetails()}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setUserDetails()}
          name="password"
        />
        <button onClick={handleButton}>add </button>
      </div>
    </div>
  );
}

export default Add;
