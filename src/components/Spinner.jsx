import React from "react";
import "../hcc-spinner.css";

export default function Spinner({ className = "", ...rest }) {
  return (
    <span
      className={`hcc-spinner ${className}`.trim()}
      role="status"
      aria-label="Loading"
      {...rest}
    />
  );
}
