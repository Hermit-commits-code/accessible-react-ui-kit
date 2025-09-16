import React from "react";
import "../hcc-checkbox.css";

export default function Checkbox({
  label,
  id,
  checked,
  onChange,
  required = false,
  error = "",
  className = "",
  ...rest
}) {
  return (
    <div className={`hcc-checkbox-group ${className}`.trim()}>
      <input
        id={id}
        type="checkbox"
        className="hcc-checkbox"
        checked={checked}
        onChange={onChange}
        aria-checked={checked}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        required={required}
        {...rest}
      />
      {label && (
        <label htmlFor={id} className="hcc-checkbox-label">
          {label}
          {required && <span style={{ color: "#dc2626" }}> *</span>}
        </label>
      )}
      {error && (
        <span id={`${id}-error`} className="hcc-checkbox-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
