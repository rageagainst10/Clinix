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
        <a href="/filtro" className="button">
          <FontAwesomeIcon className="icon-color" icon={faLaptopMedical}/>
          <span className="button-name">Prontuario</span>
        </a>
        <a href="/registro" className="button">
          <FontAwesomeIcon className="icon-color" icon={faClipboardUser} />
          <span className="button-name">Registro do pacientes</span>
        </a>
        <a href="/prescricao" className="button">
          <FontAwesomeIcon className="icon-color" icon={faFileWaveform} />
          <span className="button-name">Prescrição do Paciente</span>
        </a>
      </nav>
      <main>
        <header>
          <h3>Pronturaio</h3>
        </header>
        <div className="container-list-search">
          <section className="container-list">
            <table class="table table-bordered">
            <thead class="table-light">
              <tr>
                <th scope="col">Data de entrada</th>
                <th scope="col">nome do paciente</th>
                <th scope="col">CPF</th>
                <th scope="col">Sintoma</th>
                <th scope="col">Tipo do exame</th>
                <th scope="col">Prescrição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>John</td>
                <td>Doe</td>
                <td>@social</td>
                <td>@social</td>
                <td>@social</td>
              </tr>
            </tbody>
          </table>
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
            <div className="gap">
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
