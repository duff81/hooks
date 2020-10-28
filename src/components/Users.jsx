import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";


export default function Users() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await res.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return users.map((user) => {
// console.log(user)
    return (
      <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              <li key={user.id} className="list-group-item">
                
              
              <Link to={`/Users/${user.id}`} className="card-link">
                {user.name}
              </Link></li>
              
            </ul>
          </div>
        </div>
      </div>
      </div>
    );
  });
}
