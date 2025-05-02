import React from "react";
import './Record.css';
// Importando o CSS do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Importando o JavaScript do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Importando o CSS dos ícones
import 'bootstrap-icons/font/bootstrap-icons.css';
/* Import imagens */
import logo from "../../assets/images/logo.png";
import { useState } from "react";
/* Import FontAwesome icon*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* Import icons */
import { faLaptopMedical } from '@fortawesome/free-solid-svg-icons';
import { faClipboardUser } from '@fortawesome/free-solid-svg-icons';
import { faFileWaveform } from "@fortawesome/free-solid-svg-icons";
/* Import Conponents */
import DateSelector from "../../components/DateSelector/DateSelector";

import CustomInput from "../../components/CustomInput/CustomInput";

function Record (){
    return(
        <div className="page-filter">
            <nav className="container-navbar">
                <img className="logo_empresa" src={logo} alt="logo da empresa"/>
                <a href="/filtro" className="button">
                    <FontAwesomeIcon className="icon-color" icon={faLaptopMedical}/>
                    <span className="button-name">Prontuario</span>
                </a>
                <a href="/registro" className="button">
                    <FontAwesomeIcon className="icon-color" icon={faClipboardUser}/>
                    <span className="button-name">Cadastro do Paciente</span>
                </a>
                <a href="/prescricao" className="button">
                    <FontAwesomeIcon className="icon-color" icon={faFileWaveform}/>
                    <span className="button-name">Prescrição do Paciente</span>
                </a>
            </nav>
            <main>
                <header>
                    <h3>Cadastro do Paciente</h3>
                </header>
                <section className="container-list">
                    <CustomInput
                        label='Paciente'
                        name='email'
                        value={''}
                        type='text'
                        onChange={''}
                        placeholder="Digite o nome do paciente"
                        required={true}
                    />
                    <CustomInput
                        label='CPF'
                        name='email'
                        value={''}
                        type='text'
                        onChange={''}
                        placeholder="Digite o CPF do paciente"
                        required={true}
                    />
                    <DateSelector/>
                    <button className="button-save">Salvar</button>
                </section>
            </main>
        </div>
    )
}

export default Record