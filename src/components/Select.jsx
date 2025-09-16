import React from "react";
import "../hcc-select.css";

export default function Select({
  label,
  id,
  options = [],
  value,
  onChange,
  error = "",
  required = false,
  className = "",
  placeholder = "Select an option",
  ...rest
}) {
  return (
    <div className={`hcc-select-group ${className}`.trim()}>
      {label && (
        <label htmlFor={id} className="hcc-select-label">
          {label}
          {required && <span style={{ color: "#dc2626" }}> *</span>}
        </label>
      )}
      <select
        id={id}
        className="hcc-select"
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        required={required}
        value={value}
        onChange={onChange}
        {...rest}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) =>
          typeof opt === "string" ? (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ) : (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          )
        )}
      </select>
      {error && (
        <span id={`${id}-error`} className="hcc-select-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
