"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";

const UserCard = ({ user }) => {
  return (
    <div className="card">
      <img src={`https://robohash.org/${user.id}`} alt="robot" />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.email}</p>
        <p className="card-number">{user.phone}</p>
      </div>
    </div>
  );
};

const Home = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
      
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <h1><b>Robot Friends</b></h1>
      <div className="main">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Home;
