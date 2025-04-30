import React from "react";
import './Prescription.css';
// Importando o CSS do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Importando o JavaScript do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Importando o CSS dos ícones
import 'bootstrap-icons/font/bootstrap-icons.css';
/* Import imagens */
import logo from "../../assets/images/logo.png";
/* Import FontAwesome icon*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* Import icons */
import { faLaptopMedical } from '@fortawesome/free-solid-svg-icons';
import { faClipboardUser } from '@fortawesome/free-solid-svg-icons';
import { faFileWaveform } from "@fortawesome/free-solid-svg-icons";

import CustomInput from "../../components/CustomInput/CustomInput";
import SelectInput from "../../components/SelectInput/SelectInput";


function Prescription(){
    return(
        <div className="page-filter">
            <nav className="container-navbar">
                <img className="logo_empresa" src={logo} alt="logo da empresa"/>
                <a href="/filtro" className="button">
                    <FontAwesomeIcon className="icon-color" icon={faLaptopMedical} shake/>
                    <span className="button-name">Prontuario</span>
                </a>
                <a href="/registro" className="button">
                    <FontAwesomeIcon className="icon-color" icon={faClipboardUser} shake />
                    <span className="button-name">Registro de pacientes</span>
                </a>
                <a href="/prescricao" className="button">
                    <FontAwesomeIcon className="icon-color" icon={faFileWaveform} shake />
                    <span className="button-name">Prescrição</span>
                </a>
            </nav>
            <main>
                <header>
                    <h3>Cadastro de Paciente</h3>
                </header>
                <section className="container-list">
                    <CustomInput
                        label='Paciente'
                        name='email'
                        value={''}
                        type='text'
                        onChange={''}
                        placeholder="Nome do paciente"
                        required={true}
                    />
                    <SelectInput
                        
                    />
                    <textarea className="text-fild" name="" id=""></textarea>
                </section>
            </main>
        </div>
    )
}

export default Prescription