import React, { useState } from 'react';
import './styles.css';

export default function SelectInput({
  label,
  icon,
  options = [],         // array de { value, label }
  placeholder = 'Select...',
  value,
  onChange,
  required = false
}) {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('');

  const handleToggle = () => {
    setOpen(prev => !prev);
    setFilter(''); // reset filter on open/close
  };

  const handleSelect = opt => {
    onChange(opt.value);
    setOpen(false);
  };

  const selectedOption = options.find(o => o.value === value);
  const selectedLabel = selectedOption ? selectedOption.label : '';

  // filtra opções conforme texto
  const filteredOptions = options.filter(o =>
    o.label.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="select-input-wrapper">
      {label && <label className="select-label">{label}</label>}
      <div
        className={`select-input ${open ? 'open' : ''}`}
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && handleToggle()}
      >
        {icon && <span className="select-icon">{icon}</span>}
        <span className="select-text">
  {selectedLabel ? (
    selectedLabel
  ) : (
    <span className="placeholder-text">{placeholder}</span>
  )}
</span>

        <span className="select-arrow">▾</span>
      </div>
      {open && (
        <div className="select-dropdown-wrapper">
          <input
            type="text"
            className="select-filter-input"
            placeholder="Buscar..."
            value={filter}
            onChange={e => setFilter(e.target.value)}
            autoFocus
          />
          <ul className="select-dropdown">
            {filteredOptions.map(opt => (
              <li
                key={opt.value}
                className="select-option"
                onClick={() => handleSelect(opt)}
              >
                {opt.label}
              </li>
            ))}
            {filteredOptions.length === 0 && (
              <li className="select-no-options">Nenhum médico encontrado</li>
            )}
          </ul>
        </div>
      )}
      {/* native select escondido */}
      <select
        value={value || ''}
        onChange={e => onChange(e.target.value)}
        required={required}
        className="select-native"
      >
        <option value="" disabled>{placeholder}</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}
