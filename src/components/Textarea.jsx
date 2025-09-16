import React from "react";
import "../hcc-textarea.css";

export default function Textarea({
  label,
  id,
  error = "",
  required = false,
  className = "",
  value,
  onChange,
  ...rest
}) {
  return (
    <div className={`hcc-textarea-group ${className}`.trim()}>
      {label && (
        <label htmlFor={id} className="hcc-textarea-label">
          {label}
          {required && <span style={{ color: "#dc2626" }}> *</span>}
        </label>
      )}
      <textarea
        id={id}
        className="hcc-textarea"
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        required={required}
        value={value}
        onChange={onChange}
        {...rest}
      />
      {error && (
        <span id={`${id}-error`} className="hcc-textarea-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
