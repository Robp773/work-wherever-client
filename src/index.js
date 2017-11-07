import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home.js';
import store from './store';
import {Provider} from 'react-redux';



ReactDOM.render(

<Provider store={store}>
<Home exact path='/' />
</Provider>, 

document.getElementById('root')


);