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
                {/* <Link to="/new-registration" className="new-registration"> */}
                <a className="new-registration">
                    {/* <img src={registrationIcon} alt="NewRegistration" className="registrationicon-img" /> */}
                    <FaPlus/>
                    New Registration
                </a>
                {/* </Link> */}
                {/* <Link to="/list-of-employee" className="list-of-employee"> */}
                <a className="list-of-employee">
                {/* <img src={listOfEmployee} alt="List of Employer" className="listofemployee-img"/> */}
                <FaClipboardList/>
                    List of Employee
                </a> 
                {/* </Link> */}
            </div>
        </div>
    </div>
    );
}

export default Home;