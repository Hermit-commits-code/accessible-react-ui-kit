import React from "react";
import "../hcc-card.css";

/**
 * Card component
 *
 * Props:
 * - header: string|ReactNode (optional)
 * - footer: string|ReactNode (optional)
 * - children: node (main content)
 * - shadow: boolean (adds more shadow)
 * - borderless: boolean (no border)
 * - size: "sm" | "md" | "lg"
 * - center: boolean (center content)
 * - as: string (element type, default "section")
 * - className: string
 * - ...rest: extra props
 */
export default function Card({
  header,
  footer,
  children,
  shadow = false,
  borderless = false,
  size = "md",
  center = false,
  as: El = "section",
  className = "",
  ...rest
}) {
  return (
    <El
      className={[
        "hcc-card",
        shadow && "hcc-card--shadow",
        borderless && "hcc-card--borderless",
        size !== "md" && `hcc-card--${size}`,
        center && "hcc-card--center",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {header && <div className="hcc-card-header">{header}</div>}
      <div className="hcc-card-body">{children}</div>
      {footer && <div className="hcc-card-footer">{footer}</div>}
    </El>
  );
}
