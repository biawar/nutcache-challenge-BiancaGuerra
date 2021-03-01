import React, { FormEvent, ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from "react-icons/fa";

import PageHeader from '../../components/PageHeader';
import Modal from '../../components/Modal';

import user from '../../assets/icons/user.png';
import './styles.css';
import api from '../../services/api';

function EmployeeList(): ReactElement {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [employeeList, setEmployeeList] = useState([]);
    var IdEmp: any;

    function searchEmployee() {
        const response = api.get('classes').then(function (response) {
            setEmployeeList(response.data)
        })
    }

    function eraseEmployee(itemId: any) {
        const response = api.delete(`classes/${itemId}`).then(function (response) {
            searchEmployee()
        })
    }

    function openModal(IdEmp: any) {
        setIsModalVisible(true)
        localStorage.setItem("editEmployee", IdEmp)
    }

    React.useEffect(() => searchEmployee(), [])

    return (
        <div id="page-employee-list" className="container">
            <PageHeader title="Employee List" />
            <main>
                {employeeList.map((employee: any) => (
                    <article className="employee-item">
                        <header>
                            <img src={user} alt="avatar" />
                            <div>
                                <strong>{employee.name}</strong>
                                <span>Team: {employee.team}</span>
                            </div>
                        </header>
                        <p>
                            Birth Date: {employee.birthday}<br />
                            Gender: {employee.gender}<br />
                            Email: {employee.email}<br />
                            CPF: {employee.cpf}<br />
                        </p>
                        <footer>
                            <button className="button-edit" type="button" onClick={() => {
                                openModal(employee._id)
                            }}>
                                <FaEdit color="white" size="3rem" />
                                    Editar
                            </button>
                            <button className="employee-remove" type="button" onClick={() => eraseEmployee(employee._id)}>
                                <FaTrash color="white" size="3rem" />
                                    Apagar
                            </button>
                        </footer>
                    </article>
                )
                )
                }
                {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} id='' /> : null}
            </main>
        </div>
    );
}

export default EmployeeList;