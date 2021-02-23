import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from "react-icons/fa";

import PageHeader from '../../components/PageHeader';

import './styles.css';


function EmployeeList(){
    return(
        <div id="page-employee-list" className="container">
            <PageHeader title="Employee List"/> 
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
                    Birth Date: 31/05<br/>
                    Gender: F<br/>
                    Email: bia@nutcache.com.br<br/>
                    CPF: 12345678-12<br/>
                </p>
                <footer>
                <button className="button-edit" type="button">
                    <FaEdit color="white" size="3rem"/>
                    Editar
                </button>
                <button className="employee-remove" type="button">
                    <FaTrash color="white" size="3rem"/>
                    Apagar
                </button>
                </footer>
                </article> 
            </main>
        
        </div>
    );
}

export default EmployeeList;