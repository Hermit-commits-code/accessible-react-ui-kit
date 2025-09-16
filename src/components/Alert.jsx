import React from "react";
import "../hcc-alert.css";

const icons = {
  info: (
    <span className="hcc-alert__icon" aria-label="info" role="img">
      ℹ️
    </span>
  ),
  success: (
    <span className="hcc-alert__icon" aria-label="success" role="img">
      ✅
    </span>
  ),
  warning: (
    <span className="hcc-alert__icon" aria-label="warning" role="img">
      ⚠️
    </span>
  ),
  error: (
    <span className="hcc-alert__icon" aria-label="error" role="img">
      ❌
    </span>
  ),
};

export default function Alert({
  status = "info", // info, success, warning, error
  children,
  className = "",
  ...rest
}) {
  const statusClass = `hcc-alert--${status}`;
  return (
    <div className={`hcc-alert ${statusClass} ${className}`.trim()} {...rest}>
      {icons[status]}
      <span>{children}</span>
    </div>
  );
}
