import './Home.css';

import React from 'react';

import Navbar from './Navbar';
import Search from './Search';
import Results from './Results';
// import AddSpot from '../modals/AddSpot';
// import SingleResult from '../modals/SingleResult';
// import LandingPage from '../modals/LandingPage';
// import MySpots from '../modals/MySpots';
import {connect} from 'react-redux'

export class Home extends React.Component {

    render(){
           console.log(this.props.result)
        return (
        <main>
        <header>{this.props.result}</header>
        <Navbar />
        <Search />
        <Results />
        
        {/* <AddSpot />
        <SingleResult />
        <LandingPage />
        <MySpots />  */}
        </main>
        )

    }
 
};  

const mapStateToProps = state => ({    
    result: state.singleResult
    });        
    

    
export default connect(mapStateToProps)(Home);