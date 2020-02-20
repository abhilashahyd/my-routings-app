import React from 'react';
import './User.css';

const User = (props) => (
    <article className='User' onClick={props.clicked}>
        <h1>{props.name}</h1>
        <h3 className="Author">{props.website}</h3>
    </article>
);

export default User;