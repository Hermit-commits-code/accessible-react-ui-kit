function Button({ variant = "primary", disabled = false, children, ...rest }) {
  const base =
    "px-4 py-2 rounded font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    neutral: "bg-white text-gray-900 border hover:bg-gray-50",
  };
  const disabledStyles = "opacity-50 cursor-not-allowed";

  const className = [
    base,
    variants[variant] || variants.primary,
    disabled ? disabledStyles : "",
  ].join(" ");

  return (
    <button type="button" className={className} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}

export default Button;
