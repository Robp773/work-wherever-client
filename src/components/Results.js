import React from 'react';
import './Results.css'


export default function Results(props){
	console.log(props.resultList)
    return (
        <section className="resultsSection">
		<img className="googleMap" alt="Google Map" src="https://www.wired.com/wp-content/uploads/2016/11/GoogleMapTA.jpg"/>
		<section className="resultsColumn">
			<div>
				{props.resultList}
			</div>
			<div>
				Result 2 - Location - Details
			</div>
			<div>
				Result 3 - Location - Details
			</div>
		</section>
	</section>
    )
}