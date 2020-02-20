import React, { useState, useEffect , Suspense} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import User from './User';
// import UserDetails from './UserDetails';
// import AddNew from './AddNew';
import axios from 'axios';

let AddNew = React.lazy(() => import("./AddNew"));//lazy loaded path
let UserDetails = React.lazy(() => import("./UserDetails"));//lazy loaded path

const Users = (props) => {

  let  [ users, setUsers] = useState([]);
  let navigate = useNavigate();
  const selectUser = (id )=>{
      console.log(id,'here');
       navigate('/users/'+id);
    };

  useEffect(()=>{
    axios.get( 'https://jsonplaceholder.typicode.com/users' )
    .then( response => {
        const rusers = response.data;
        setUsers(  rusers);
        // console.log( response );
    } )
    .catch( error => {
        console.log( error );
        // this.setState({error: true});
    } );
  },[]);

  let usersList='';
  if (users){
    usersList = users.map( user => {
        return (
            <User
                key={user.id}
                name={user.username}
                website={user.website}
                clicked={() => selectUser( user.id )} />
        );
    } );
  }
 

return(
    <div>
    <nav>
      <Link to="new">Just another link</Link>
    </nav>
    {usersList}
    <Suspense fallback="<div>Loading...</div>">
    <Routes>
      <Route path=":id" element={<UserDetails users={users}/>} />
      <Route path="new" element={<AddNew />} />
   </Routes>
   </Suspense>
  </div>
);
}

export default Users;