import React, { useEffect, useRef } from "react";
import "../hcc-modal.css";

/**
 * Modal component (dialog)
 *
 * Props:
 * - open: boolean (controls visibility)
 * - onClose: function (called on backdrop/esc/close)
 * - header: ReactNode (optional)
 * - footer: ReactNode (optional)
 * - children: node (main content)
 * - size: "sm" | "md" | "lg"
 * - center: boolean (centered content)
 * - closeButton: boolean (show close button)
 * - className: string
 * - ...rest
 */
export default function Modal({
  open,
  onClose,
  header,
  footer,
  children,
  size = "md",
  center = true,
  closeButton = true,
  className = "",
  ...rest
}) {
  const ref = useRef();

  // Trap focus
  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement;
    ref.current?.focus();
    function handleKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      prev?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={["hcc-modal-backdrop", center && "hcc-modal--center"]
        .filter(Boolean)
        .join(" ")}
      tabIndex={-1}
      aria-modal="true"
      role="dialog"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div
        ref={ref}
        className={[
          "hcc-modal",
          size !== "md" && `hcc-modal--${size}`,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        tabIndex={0}
        {...rest}
      >
        {closeButton && (
          <button
            className="hcc-modal-close"
            aria-label="Close modal"
            onClick={onClose}
            type="button"
          >
            &times;
          </button>
        )}
        {header && <div className="hcc-modal-header">{header}</div>}
        <div className="hcc-modal-body">{children}</div>
        {footer && <div className="hcc-modal-footer">{footer}</div>}
      </div>
    </div>
  );
}
