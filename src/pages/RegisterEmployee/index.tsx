import React, { ReactElement, useState, FormEvent } from 'react';
import { useForm } from 'react-hook-form';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';

import { FaRegArrowAltCircleUp } from "react-icons/fa";

import './styles.css';
import api from '../../services/api';

function RegisterEmployee(): ReactElement {
  const history = useHistory();

  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [startDate, setstartDate] = useState('');
  const [cpf, setCpf] = useState('');
  const [team, setTeam] = useState('');


  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('classes', {
      name,
      birthday,
      gender,
      email,
      cpf,
      startDate,
      team,
    }).then(() => {
      alert('Cadastro realizado com sucesso!');

      history.push('/');
    }).catch(() => {
      alert('Erro no cadastro.');
    });
  }

  return (
    <div id="page-register-employee" className="container">
      <PageHeader title="Register Employee" />
      <main>
        <fieldset>
          <form onSubmit={handleCreateClass}>
            <legend>Employee data</legend>
            <Input
              name="name"
              label="Name"
              value={name}
              onChange={(e) => { setName(e.target.value) }}
            />
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="2017-05-24"
              // className={classes.textField}
              InputLabelProps={{
                // shrink: true,
              }}
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

            <footer>
              <p>
                <FaRegArrowAltCircleUp className="icon" />
                        Importante!
                        {' '}
                <br />
                        Preencha todos os dados
                    </p>
              <button type="submit">
                Salvar cadastro
                    </button>
              {/* <ul>
                  {employeeList.map(employee => (
                    <li key= {employee.id}>
                      <br/>
                      {employee.avatar} <br/>
                      {employee.name} <br/>
                      {employee.birthday} <br/>
                      {employee.gender} <br/>
                      {employee.email} <br/>
                      {employee.cpf} <br/>
                      {employee.team} <br/> <br/>
                    </li>
                  ))}
                  </ul> */}

            </footer>
          </form>
        </fieldset>

      </main>

    </div>
  );
}

export default RegisterEmployee;