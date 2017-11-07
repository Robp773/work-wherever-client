import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'
export default function Navbar(props){

     return (
        <nav>
		    <button className="navBtn">Sign Up</button>
            <button className="navBtn">Sign Out</button> 
            <button className="navBtn"><Link to='/addspot'>Add Spot</Link></button> 
            <button className="navBtn"><Link to='/myspots'>My Spots</Link></button>
	    </nav>
     )
}