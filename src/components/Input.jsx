function Input({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  disabled = false,
  required = false,
  error = "",
  className = "",
  ...rest
}) {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium mb-1 text-gray-700"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={[
          "block w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
          error ? "border-red-500 focus:ring-red-500" : "border-gray-300",
          disabled && "bg-gray-100 opacity-60 cursor-not-allowed",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;
