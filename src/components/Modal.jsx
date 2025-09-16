import React from "react";
import "../hcc-modal.css";

export default function Modal({
  isOpen,
  onClose,
  children,
  className = "",
  ...rest
}) {
  if (!isOpen) return null;

  return (
    <div className="hcc-modal-backdrop" onClick={onClose} tabIndex={-1}>
      <div
        className={`hcc-modal ${className}`.trim()}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        {...rest}
      >
        <button
          className="hcc-modal__close-btn"
          aria-label="Close modal"
          onClick={onClose}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
