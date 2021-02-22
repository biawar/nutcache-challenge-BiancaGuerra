import React from 'react';
import { Link } from 'react-router-dom';


import imgCharts from '../../assets/images/imgCharts.png';
import logoName from '../../assets/images/logoName.png';

import { FaPlus, FaClipboardList } from "react-icons/fa";

import './styles.css';

function Home() {
    return (
        <div id="page-home">
        <div id="page-home-content" className="container">
            <div className="logo-container">
                <img src={logoName} alt="Nutcache"/>
                <h2>Nutcache Registration</h2>
            </div>

            <img 
            src={imgCharts} 
            alt="Nutcache"
            className="nutcache-img" />

            <div className="buttons-container">
                <Link to="/register-employee" className="new-registration">
                    <FaPlus/>
                    New Registration
                </Link>
                <Link to="/employee-list" className="list-of-employee">
                <FaClipboardList/>
                    List of Employee
                </Link> 
            </div>
        </div>
    </div>
    );
}

export default Home;