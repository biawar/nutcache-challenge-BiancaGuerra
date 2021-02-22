import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaUsers } from "react-icons/fa";

import PageHeader from '../../components/PageHeader';

import './styles.css';


function EmployeeList(){
    return(
        <div id="page-employee-list" className="container">
            <PageHeader title="Employer Title"/> 
            <main>
               <article className="employee-item">
                <header>
                   <img src="https://avatars.githubusercontent.com/u/19397509?s=460&u=bfd7294b443c571fc70624f4142491deefcfb53e&v=4" alt="Bianca Guerra"/>
                   <div>
                       <strong>Bianca Guerra</strong>
                       <span>Team: Developer</span>
                   </div>
                </header>
                <p>
                    Birth Date: 31/05
                    Gender: F
                    Email: bia@nutcache.com.br
                    CPF: 12345678-12
                </p>
                </article> 
            </main>
        
        </div>
    );
}

export default EmployeeList;