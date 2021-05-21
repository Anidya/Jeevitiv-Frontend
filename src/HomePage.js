import React from 'react';

// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header'
import Login from './Login'
import Footer from './Footer'
import Home from './Home'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function HomePage() {
    return (
        <div className="App">
            <Header />
            <Home />



        </div>
    );
}

export default HomePage;
