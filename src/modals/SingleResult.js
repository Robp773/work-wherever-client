import React from 'react';
import './SingleResult.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
export class SingleResult extends React.Component{
	super(props){
		constructor(props);
	}
   
    
		render(){
			const item = this.props.result;
			const oneResult = (
			<div className='result'>
				<h4>Name</h4>
					<div>{item.name}</div>
				<h4>Location</h4>
					<div>{item.location}</div>
				<h4>Environment</h4>
					<div>{item.environment}</div>
				<h4>Internet</h4>
					<div>{item.internet.join(', ')}</div>
				<h4>Services</h4>
					<div>{item.services.join(', ')}</div>
			</div>
			)
				
			
			
			return(
			   <div className="resultModal">
			<div className="singleResultBody">
			<Link to='/'><button className='exitBtn'>X</button></Link>
			
		<div className="result googleMap">
		<h4>Google Maps</h4>
        <img className="resultMap" alt='Google Map'
        src="https://cnet2.cbsistatic.com/img/H_zPLL8-QTZOLxJvgHQ1Jkz0EgY=/830x467/2013/07/10/f0bcef02-67c2-11e3-a665-14feb5ca9861/maps_routemap.png"/>
        </div>
		<div>{oneResult}</div>
		</div>
	</div>
	)
		}
     
}


const mapStateToProps = state => ({    
    result: state.singleResult
    });        
        
export default connect(mapStateToProps)(SingleResult);