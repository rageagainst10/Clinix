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

function Prescription (){
    return(
                <div className="page-filter">
                    <nav className="container-navbar">
                        <img className="logo_empresa" src={logo} alt="logo da empresa"/>
                        <button className="button">
                            <FontAwesomeIcon icon={faLaptopMedical} shake/>
                            <span>Prontuario</span>
                        </button>
                        <button className="button">
                            <FontAwesomeIcon icon={faClipboardUser} shake />
                            <span>Cadastro de Paciente</span>
                        </button>
                        <button className="button">
                            <FontAwesomeIcon icon={faFileWaveform} shake />
                            <span>Prescrição</span>
                        </button>
                    </nav>
                    <main>
                        <header>
                            <h3>Prescrição</h3>
                        </header>
                        <section className="container-list">
                            <h1>list</h1>
                        </section>
                    </main>
                </div>
            )
}

export default Prescription