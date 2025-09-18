import React from "react";
import "../hcc-radio.css";

/**
 * RadioGroup component
 *
 * Props:
 * - label: string (optional, group label)
 * - name: string (required, all radios in group share this)
 * - value: string (selected value)
 * - onChange: function (e)
 * - options: array of { label: string, value: string, disabled?: boolean }
 * - required: boolean
 * - disabled: boolean (applies to all)
 * - readOnly: boolean (applies to all)
 * - size: "sm" | "md" | "lg"
 * - error: string (shows error state/message)
 * - success: string (shows success state/message)
 * - help: string (shows help text)
 * - className: string
 */
export default function RadioGroup({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
  disabled = false,
  readOnly = false,
  size = "md",
  error = "",
  success = "",
  help = "",
  className = "",
  ...rest
}) {
  const groupId = React.useId
    ? React.useId()
    : `hcc-radio-group-${Math.random().toString(36).slice(2, 10)}`;
  const describedBy =
    [
      error ? `${groupId}-error` : "",
      success ? `${groupId}-success` : "",
      help ? `${groupId}-help` : "",
    ]
      .filter(Boolean)
      .join(" ") || undefined;

  let radioStateClass = "";
  if (error) radioStateClass = "hcc-radio--error";
  else if (success) radioStateClass = "hcc-radio--success";
  if (size === "sm") radioStateClass += " hcc-radio--sm";
  if (size === "lg") radioStateClass += " hcc-radio--lg";

  return (
    <div
      className={["hcc-radio-group", className].filter(Boolean).join(" ")}
      role="radiogroup"
      aria-labelledby={label ? groupId + "-label" : undefined}
      aria-describedby={describedBy}
      {...rest}
    >
      {label && (
        <span id={groupId + "-label"} className="hcc-radio-label-group">
          {label}{" "}
          {required && (
            <span aria-hidden="true" style={{ color: "#dc2626" }}>
              *
            </span>
          )}
        </span>
      )}
      {options.map((opt) => {
        const id = `${name}-${opt.value}`;
        return (
          <div className="hcc-radio-row" key={opt.value}>
            <input
              type="radio"
              id={id}
              name={name}
              className={["hcc-radio", radioStateClass]
                .filter(Boolean)
                .join(" ")}
              value={opt.value}
              checked={value === opt.value}
              onChange={onChange}
              required={required}
              disabled={disabled || opt.disabled}
              aria-disabled={disabled || opt.disabled}
              readOnly={readOnly}
              aria-readonly={readOnly}
              aria-invalid={!!error}
            />
            <label htmlFor={id} className="hcc-radio-label">
              {opt.label}
            </label>
          </div>
        );
      })}
      {help && !error && (
        <div id={groupId + "-help"} className="hcc-radio-help">
          {help}
        </div>
      )}
      {error && (
        <div id={groupId + "-error"} className="hcc-radio-error" role="alert">
          {error}
        </div>
      )}
      {success && !error && (
        <div id={groupId + "-success"} className="hcc-radio-success">
          {success}
        </div>
      )}
    </div>
  );
}
