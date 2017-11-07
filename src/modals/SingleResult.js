import React from 'react';
import './SingleResult.css';
import {Link} from 'react-router-dom';
export default function SingleResult(props){
    
    return(
        <div className="resultModal">
			<div className="singleResultBody">
			<Link to='/'><button className='exitBtn'>X</button></Link>
			
		<div className="result googleMap">
		<h4>Google Maps</h4>
        <img className="resultMap" alt='Google Map'
        src="https://cnet2.cbsistatic.com/img/H_zPLL8-QTZOLxJvgHQ1Jkz0EgY=/830x467/2013/07/10/f0bcef02-67c2-11e3-a665-14feb5ca9861/maps_routemap.png"/>
        </div>
		<div className="result location">
			<h4>Location</h4>
			<div>
				200 Sweet Spot Road
			</div>
			<div>
				Tabawakasada City OH 04938
			</div>
		</div>
		<div className="result details">
			<h4>Environment</h4>
			<div>
				Some Activity
			</div>
			<div>
				<h4>Internet Access</h4>
				<div>
					WiFi - Ethernet
				</div>
			</div>
			<div>
				<h4>Services</h4>
				<div>
					Coffee - Outlets
				</div>
			</div>
			<div>
				<h4>Comments</h4>
				<div>
					Nice low key place to get some work done
				</div>
			</div>
		</div>
		</div>
	</div>
    )
}