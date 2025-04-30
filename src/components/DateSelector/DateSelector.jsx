import React from 'react';
import './styles.css';

const DateSelector = () => {
  const dias = Array.from({ length: 31 }, (_, i) => i + 1);
  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  const anos = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  return (
    <div className="date-selector">
      <select className="select-box">
        <option className='text' disabled selected>Dia</option>
        {dias.map(dia => <option key={dia}>{dia}</option>)}
      </select>

      <select className="select-box">
        <option disabled selected>Mês</option>
        {meses.map((mes, index) => <option key={index}>{mes}</option>)}
      </select>

      <select className="select-box bigger">
        <option disabled selected>Ano</option>
        {anos.map(ano => <option key={ano}>{ano}</option>)}
      </select>
    </div>
  );
};

export default DateSelector;
