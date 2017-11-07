
import './AddSpot.css';

import React from 'react';
import {Link} from 'react-router-dom';

export default function AddSpot(props){
return (
    <div className="addSpot modal">
    <form className="addSpotForm">
        <h2>Add a Remote Working Spot</h2>
        <input name="name" placeholder="Enter a Name" type="text"/>
        <input name="streetAddress" placeholder="Street" type="text"/> 
        <input name="cityAddress" placeholder="City" type="text"/> 
        <input name="zipcode" placeholder="Zipcode" type="text"/>
        <div>
            OR
        </div>
        <input placeholder="Latitude and Longitude" type="text"/> 
        <select name="environment">
            <option>
                Select Environment
            </option>
            <option>
                Peace and Quiet
            </option>
            <option>
                Some Activity
            </option>
            <option>
                Potentially Distracting
            </option>
            <option>
                Very Active Area
            </option>
        </select>
        <fieldset className="internetAccess">
            <h4>Internet Access</h4>
            <label htmlFor="openWifi">Open WiFi</label> 
            <input type="checkbox"/> 
            <label htmlFor="protectedWifi">Protected WiFi</label> 
            <input type="checkbox"/> 
            <label htmlFor="ethernet">Ethernet</label> 
            <input type="checkbox"/> 
            <label htmlFor="4g">4G</label> 
            <input type="checkbox"/>
        </fieldset>
        <fieldset className="services">
            <h4>Services</h4>
            <label htmlFor="food">Food</label> 
            <input type="checkbox"/> 
            <label htmlFor="coffee">Coffee</label> 
            <input type="checkbox"/> 
            <label htmlFor="outlets">Outlets</label> 
            <input type="checkbox"/> 
            <label htmlFor="desks">Desks or Tables</label> 
            <input type="checkbox"/>
        </fieldset>
        <input className="comments" placeholder="Additional Comments..." type="text"/> 
        <button className="submitBtn" type="submit">Submit</button>
        <button className='exitBtn'><Link to='/'>X</Link></button>
    </form>
</div>
)
}