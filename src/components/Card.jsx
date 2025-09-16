import React from "react";
import "../hcc-card.css";

export default function Card({ children, className = "", ...rest }) {
  return (
    <div className={`hcc-card ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
}
