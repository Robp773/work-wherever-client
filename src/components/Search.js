import './Search.css'
import React from 'react';


export default function Search(props){
    return(
        <section className="searchSection">
		<form>
			<input className="searchInput" placeholder="Search by location"type="text"/> 
            <button className="submitSearch" type="submit">Search</button>
		</form>
	    </section>
    )

}