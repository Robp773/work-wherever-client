import React from 'react';
import './Results.css'


export default function Results(props){
    return (
        <section className="resultsSection">
		<img className="googleMap" alt="Google Map" src="https://www.wired.com/wp-content/uploads/2016/11/GoogleMapTA.jpg"/>
		<section className="resultsColumn">
			<div>
				{props.resultList}
			</div>
		</section>
	</section>
    )
}