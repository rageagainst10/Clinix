import React, { useState } from "react";
import './Filter.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
/* Import FontAwesome icon*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* Import Components */
import DateRangePicker from "../../components/DateRangePicker/DateRangePicker";
import SelectInput from "../../components/SelectInput/SelectInput";
/* Import Images */
import logo from "../../assets/images/logo.png";
/* Import Icons */
import { faLaptopMedical, faClipboardUser, faFileWaveform, faUserNurse, faBedPulse, faTablets, faViruses} from '@fortawesome/free-solid-svg-icons';

const options = [
  { value: 'doc1', label: 'Dr. Silva' },
  { value: 'doc2', label: 'Dra. Souza' },
  // ...
];

export default function Filter() {
  const [medicoId, setMedicoId] = useState("");
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });

  const handleApply = ({ startDate, endDate }) => {
    setDateRange({ startDate, endDate });
    // dispare aqui sua consulta à lista de consultas
  };

  const handleCancel = () => {
    setDateRange({ startDate: null, endDate: null });
  };

  return (
    <div className="page-filter">
      <nav className="container-navbar">
        <img className="logo_empresa" src={logo} alt="logo da empresa"/>
        <button className="button">
          <FontAwesomeIcon className="icon-color" icon={faLaptopMedical} shake/>
          <span className="button-name">Prontuario</span>
        </button>
        <button className="button">
          <FontAwesomeIcon className="icon-color" icon={faClipboardUser} shake />
          <span className="button-name">Registro de pacientes</span>
        </button>
        <button className="button">
          <FontAwesomeIcon className="icon-color" icon={faFileWaveform} shake />
          <span className="button-name">Prescrição</span>
        </button>
      </nav>

      <main>
        <header>
          <h3>Consultas</h3>
        </header>

        <div className="container-list-search">
          <section className="container-list">
            <h1>list</h1>
          </section>

          <section className="container-search">
            <h4 className="title-search">Filtros</h4>
            {/* DateRangePicker controlado */}
            <DateRangePicker
              initialStart={dateRange.startDate}
              initialEnd={dateRange.endDate}
              onApply={handleApply}
              onCancel={handleCancel}
            />
            <div className="gap-2">
                <SelectInput
                    label="Médico"
                    icon={<FontAwesomeIcon className="icon-color" icon={faUserNurse}/>}
                    options={options}
                    value={medicoId}
                    onChange={setMedicoId}
                    placeholder="Filtro por médico"
                />
                <SelectInput
                    label="Paciente"
                    icon={<FontAwesomeIcon className="icon-color" icon={faBedPulse}/>}
                    options={options}
                    value={medicoId}
                    onChange={setMedicoId}
                    placeholder="Filtro por paciente"
                    required
                />
                <SelectInput
                    label="Medicamento"
                    icon={<FontAwesomeIcon className="icon-color" icon={faTablets}/>}
                    options={options}
                    value={medicoId}
                    onChange={setMedicoId}
                    placeholder="Filtro por medicamento"
                />
                <SelectInput
                    label="Sintoma"
                    icon={<FontAwesomeIcon className="icon-color" icon={faViruses}/>}
                    options={options}
                    value={medicoId}
                    onChange={setMedicoId}
                    placeholder="Filtro por sintoma"
                />
                <div className="align-buttons">
                    <button className="button-filter">Filtrar</button>
                    <button className="button-cancel">Cancelar</button>
                </div>
            </div>
          </section>
        </div>
      </main>
    </div>
);
}
