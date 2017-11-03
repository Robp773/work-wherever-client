import React from 'react';
import './Navbar.css';

export default function Navbar(props){

     return (
        <nav>
		    <button className="navBtn">Sign Up</button>
            <button className="navBtn">Sign Out</button> 
            <button className="navBtn">Add Spot</button> 
            <button className="navBtn">My Spots</button>
	    </nav>
     )
}