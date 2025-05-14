import React from "react";
import './Prescription.css';
import { useState } from "react";
// Importando o CSS do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Importando o JavaScript do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
import DateSelector from "../../components/DateSelector/DateSelector";


const options = [
    { value: 'doc1', label: 'Dr. Silva' },
    { value: 'doc2', label: 'Dra. Souza' },
    // ...
];
  

function Prescription(){
    const [option, setOption] = useState("1");
    const [medicoId, setMedicoId] = useState("");

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
                    <span className="button-name">Registro do pacientes</span>
                </a>
                <a href="/prescricao" className="button">
                    <FontAwesomeIcon className="icon-color" icon={faFileWaveform}/>
                    <span className="button-name">Prescrição do Paciente</span>
                </a>
            </nav>
            <main>
                <header>
                    <h3>Prescrição do Paciente</h3>
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
                    <div className="select-size">
                    <SelectInput
                        label="Médico"
                        icon={''}
                        options={options}
                        value={medicoId}
                        onChange={setMedicoId}
                        placeholder="Filtro por médico"
                    />
                    </div>
                    <textarea className="text-fild" placeholder="Receita médica" name="" id=""></textarea>
                    <div className="select-size">
                        <SelectInput
                            label="Tipo do exame"
                            icon={''}
                            options={options}
                            value={medicoId}
                            onChange={setMedicoId}
                            placeholder="Nome do exame"
                        />
                    </div>
                    <button className="button-save">Salvar</button>
                </section>
            </main>
        </div>
    )
}

export default Prescription