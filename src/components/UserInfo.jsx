import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useParams,
} from "react-router-dom";

const UserInfo = () => {
  const [user, setUserInfo] = useState({});
  const { id } = useParams();
  // console.log(id);
  const getUserInfo = async () => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    let user = await res.json();
    await setUserInfo(user);
  };

  useEffect( () => {
    getUserInfo();
  }, {});
  console.log(user.name);
  return (
    
    <div key={user.id} className="card">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <h6 className="card-subtitle">{user.email}</h6>

        <p className="card-text">username:{user.username}</p>
        <p className="card-text">phone number: {user.phone}</p>

        <p className="card-text">
          <Link to={user.website} className="card-link">
            {user.website}
          </Link>
        </p>
        <Link className="button" to={"/Users"}>
          Go back
        </Link>
      </div>
    </div>
  );
};
export default UserInfo