import React from 'react';
import { useParams} from 'react-router-dom';
import './User.css';

const UserDetails = (props) => {
    let params = useParams();
    let user = null;
    console.log(params.id,props);
    if(props && params){
        user = props.users[params.id-1];
        console.log(user);
    }
   
    return(
   <div>
         {user?<div className="UserInfo">
        <h1>User Name: {user.username} </h1>
        <h2>Name: {user.name} / {user.company.name} - {user.email} / {user.phone}</h2>
        <h3>{user.website}</h3>
    </div>:''}
   </div>
);
    }

export default UserDetails;