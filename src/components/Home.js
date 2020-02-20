import React from 'react';
import {Link } from 'react-router-dom';
const Home = (props) => (
   <div>
       <h1>Routings Example Home Page</h1>
       <nav>
      <Link to="users">Users List</Link>
    </nav>
   </div>
);

export default Home;