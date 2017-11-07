import React from 'react';
import './Results.css'


export default function Results(props){
    return (
        <section className="resultsSection">
			<div className="mapContainer">
				<img className="googleMap" alt="Google Map" 
					src="https://www.wired.com/wp-content/uploads/2016/11/GoogleMapTA.jpg"/>
			</div>
		<section className="resultsColumn">
			<div className="listContainer">
				{props.resultList}
			</div>
		</section>
	</section>
    )
}