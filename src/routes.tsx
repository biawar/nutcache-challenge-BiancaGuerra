import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import EmployeeList from './pages/EmployeeList';
import Home from './pages/Home';
import RegisterEmployee from './pages/RegisterEmployee';

function Routes() {
     return(
         <BrowserRouter>
         <Route path="/" exact component={Home}/>
         <Route path="/register-employee" component={RegisterEmployee}/>
         <Route path="/employee-list" component={EmployeeList}/>
         </BrowserRouter>
     );
 }
 export default Routes;