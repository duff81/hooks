import React from "react";
import { Link } from "react-router-dom";
import hook from "./hook.jpg"

let Home = () => {
  return (
    <React.Fragment>
      <div style={{display: 'flex', justifyContent: 'center' }} >
       <img src={hook} alt="" srcset="image of a fake hook"/>
           
         <div></div>

        <Link to="/Users">
          <button className="m-2 btn btn-outline-secondary shadow-lg p-3 mb-5 bg-black rounded" type="button">Show Users</button>
        </Link>

     </div>
    </React.Fragment>
  );
};

export default Home;
