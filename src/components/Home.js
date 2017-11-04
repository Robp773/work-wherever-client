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

        // Modals

        // <AddSpot />
        // <SingleResult />
        // <LandingPage />
        // <MySpots />
     

    render(){
        const resultList = this.props.resultList.map((item, index)=>{
           return (
            <div className="listItem" key={index} >
            <div>{item.name}</div>
            <div>{item.location}</div>
            <div>{item.environment}</div>
            </div>
           )
        })

        return (
        <main>
        <header>Work Wherever</header>
        <Navbar />
        <Search />
        <Results resultList = {resultList} />
        </main>
        )
    }
};  

const mapStateToProps = state => ({    
    result: state.singleResult,
    resultList: state.resultList
    });        
    

    
export default connect(mapStateToProps)(Home);