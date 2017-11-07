import './Home.css';

import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Results from './Results';
import AddSpot from '../modals/AddSpot';
import SingleResult from '../modals/SingleResult';
// import LandingPage from '../modals/LandingPage';
import MySpots from '../modals/MySpots';
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom';

export class Home extends React.Component {

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
        <Router>
            <main>
            <header>Work Wherever</header>
            <Navbar /> 
            <Route exact path='/addspot' component={AddSpot} />
            <Route exact path='/singleresult' component={SingleResult} />
            <Route exact path='/myspots' component={MySpots} />
            <Search />
            <Results resultList = {resultList} />
            </main>
        </Router>
        )
    }
};  

const mapStateToProps = state => ({    
    result: state.singleResult,
    resultList: state.resultList
    });        
        
export default connect(mapStateToProps)(Home);