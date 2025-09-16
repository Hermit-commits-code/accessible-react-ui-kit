import React from "react";
import "../hcc-radio.css";

export default function RadioGroup({
  label,
  name,
  options = [],
  value,
  onChange,
  required = false,
  error = "",
  className = "",
  ...rest
}) {
  return (
    <div className={`hcc-radio-group ${className}`.trim()}>
      {label && (
        <span className="hcc-radio-label">
          {label}
          {required && <span style={{ color: "#dc2626" }}> *</span>}
        </span>
      )}
      {options.map((opt, idx) => {
        const optValue = typeof opt === "string" ? opt : opt.value;
        const optLabel = typeof opt === "string" ? opt : opt.label;
        const id = `${name}-${optValue}`;
        return (
          <label key={id} htmlFor={id} className="hcc-radio-option">
            <input
              type="radio"
              id={id}
              name={name}
              className="hcc-radio"
              value={optValue}
              checked={value === optValue}
              onChange={onChange}
              required={required && idx === 0}
              aria-invalid={!!error}
              aria-describedby={error ? `${name}-error` : undefined}
              {...rest}
            />
            {optLabel}
          </label>
        );
      })}
      {error && (
        <span id={`${name}-error`} className="hcc-radio-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
