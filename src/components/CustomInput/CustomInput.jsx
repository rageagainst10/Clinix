import React from "react";
import './styles.css';

const CustomInput = ({label, type, name, value, onChange, placeholder, required=false}) => {
    return(
        <div className="custom-input-wrapper">
            {label && <label htmlFor={name} className="custom-label">{label}</label>}
            <input 
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="custom-input"
                required={required}
            />
        </div>
    )
}

export default CustomInput