import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'
export default function Navbar(props){

     return (
        <nav>
		    <button className="navBtn">Sign Up</button>
            <button className="navBtn">Sign Out</button> 
           <Link to='/addspot'> <button className="navBtn">Add Spot</button></Link> 
           <Link to='/myspots'><button className="navBtn">My Spots</button></Link>
	    </nav>
     )
}