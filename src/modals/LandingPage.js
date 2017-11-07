import './LandingPage.css'

import React from 'react';
import {Link} from 'react-router-dom';

export default function LandingPage(props){

    return(

        <div className="landingBg">
        <Link to='/'><button className='exitBtn'>X</button></Link>

        <div className="landingPage">
            If working in the same old office work space is starting to get old, 
            its time for a change of scenery.  Search for remote work locations near you, 
            pick out spots that you would like to work at, and start working somewhere fresh. 
        </div>
        <button className="landingBtn">Start Searching</button>
        </div>
    )
}