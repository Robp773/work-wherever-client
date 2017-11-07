import './MySpots.css'
import React from 'react';
import {Link} from 'react-router-dom';

export default function MySpots(props){
    return (
        <div className="mySpots">
          <div className="mySpotsBody">
          <Link to='/'><button className='exitBtn'>X</button></Link>
        <h4>Result</h4>
            <div>Spot - Location - Details <button>Delete</button></div>
            <div>Spot - Location - Details <button>Delete</button></div>
            <div>Spot - Location - Details <button>Delete</button></div>
            <div>Spot - Location - Details <button>Delete</button></div>
            <div>Spot - Location - Details <button>Delete</button></div> 
            <div>Spot - Location - Details <button>Delete</button></div>
            <div>Spot - Location - Details <button>Delete</button></div>
            <div>Spot - Location - Details <button>Delete</button></div>
            <div>Spot - Location - Details <button>Delete</button></div>
        </div>
      </div>
    )
}