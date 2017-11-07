import './MySpots.css'
import React from 'react';
import {Link} from 'react-router-dom';

export default function MySpots(props){
    return (
        <div className="mySpots">
          <div className="mySpotsBody">
        <h4>Saved Spots</h4>
            <div>Spot - Location - Details <button>Delete</button></div>
            <div>Spot - Location - Details <button>Delete</button></div>
            <div>Spot - Location - Details <button>Delete</button></div>
            <div>Spot - Location - Details <button>Delete</button></div>
            <div>Spot - Location - Details <button>Delete</button></div>
            <div>Spot - Location - Details <button>Delete</button></div> 
            <div>Spot - Location - Details <button>Delete</button></div>
            <div>Spot - Location - Details <button>Delete</button></div>
            <div>Spot - Location - Details <button>Delete</button></div>
            <div>Spot - Location - Details <button>Delete</button></div>
            <button className='exitBtn'><Link to='/'>X</Link></button>
        </div>
      </div>
    )
}