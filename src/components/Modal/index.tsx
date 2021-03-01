import { Button } from '@material-ui/core';
import React, { Children, useState } from 'react';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TextField from '@material-ui/core/TextField';

import { FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

import EmployeeList from '../../pages/EmployeeList/index'

interface ModalProps {
    id: any;
    onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ id, onClose = () => { }, children }) => {


    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [startDate, setstartDate] = useState('');
    const [cpf, setCpf] = useState('');
    const [team, setTeam] = useState('');


    const [employeeEdit, setEmployeeEdit] = useState<any>('');
    const [employeeOpen, setEmployeeOpen] = useState(false);
    // var employeeEdit:any

    function searchEmployee() {

        console.log(localStorage.getItem('editEmployee'))
        const response = api.get(`classes/${localStorage.getItem('editEmployee')}`).then(function (response) {
            setEmployeeEdit(response.data)
            setEmployeeOpen(true)
        })
        setAvatar(employeeEdit.avatar)
        setBirthday(employeeEdit.birthday)
        setGender(employeeEdit.gender)
        setCpf(employeeEdit.cpf)
        setEmail(employeeEdit.email)
        setstartDate(employeeEdit.startDate)
        setTeam(employeeEdit.team)
        setName(employeeEdit.name)
        console.log(employeeEdit)
    }

    function sendApi() {
        api.put(`classes/${localStorage.getItem('editEmployee')}`, {
            name,
            avatar,
            birthday,
            gender,
            email,
            cpf,
            startDate,
            team,
        }).then(() => {
            alert('Employee atualizado com sucesso!');
            onClose()
        }).catch(() => {
            alert('Erro no cadastro.');
        });
        
    }

    React.useEffect(() => searchEmployee(), )


    return (
        <div className="modal">
            {employeeOpen && (
                <div className="modal">

                    <div className="container">
                        <Button className="close" onClick={onClose}>
                            <FaWindowClose color="var(--color-primary-darker)" size="3rem" />
                        </Button>
                        <form>
                            <legend>Employee data</legend>
                            <Input
                                name="name"
                                label="Name"
                                value={name}
                                onChange={e => { setName(e.target.value) }}
                            />
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                defaultValue={birthday}
                                InputLabelProps={{
                                    // shrink: true,
                                }}
                                onChange={(e) => { setBirthday(e.target.value) }}

                            />
                            <Select
                                name="gender"
                                label="Gender"
                                value={gender}
                                onChange={(e) => { setGender(e.target.value) }}
                                options={[
                                    { value: 'Female', label: 'Female' },
                                    { value: 'Male', label: 'Male' },
                                ]}
                            />
                            <Input
                                name="email"
                                label="E-mail"
                                onChange={(e) => { setEmail(e.target.value) }}
                                value={email}
                            />
                            <Input
                                name="cpf"
                                label="CPF"
                                onChange={(e) => { setCpf(e.target.value) }}
                                value={cpf}
                            />
                            <Input
                                name="startDate"
                                label="Start date"
                                onChange={(e) => { setstartDate(e.target.value) }}
                                value={startDate}
                            />
                            <Input
                                name="team"
                                label="team"
                                onChange={(e) => { setTeam(e.target.value) }}
                                value={team}
                            />
                            <button onClick={() => {
                        sendApi()
                    }}>
                        enviar
                    </button>
                        </form>
                        <div className="content">{children}</div>
                    </div>
                    
                </div>

            )}
        </div>
    );
}

export default Modal;