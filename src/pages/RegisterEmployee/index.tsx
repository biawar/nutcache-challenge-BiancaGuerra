import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { FaRegArrowAltCircleUp } from "react-icons/fa";

import './styles.css';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

function RegisterEmployee(){

    const classes = useStyles();

    return(
        <div id="page-register-employee" className="container">
            <PageHeader title="Register Employer"/> 
        
            <main>
                <fieldset>
                    {/* <form className={classes.container} noValidate> */}
                        <legend>Employee data</legend>
                            <Input name="avatar" label="Avatar"/> 
                            <Input name="name" label="Name"/> 
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                            <Input name="gender"  label="Gender"/> 
                            <Input name="email" label="E-mail"/> 
                            <Input name="cpf" label="CPF"/> 
                            
                            <Input name="team" label="team"/> 
                    {/* </form> */}
                </fieldset> 

                <footer>
                    <p>
                      <FaRegArrowAltCircleUp className="icon"/>
                        Importante! <br/>
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>

            </main> 

        </div>
    );
}

export default RegisterEmployee;