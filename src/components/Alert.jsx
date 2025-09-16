const ALERT_STYLES = {
  info: "bg-blue-100 text-blue-900 border-blue-300",
  success: "bg-green-100 text-green-900 border-green-300",
  warning: "bg-yellow-100 text-yellow-900 border-yellow-300",
  error: "bg-red-100 text-red-900 border-red-300",
};

function Alert({ children, status = "info", className = "", ...props }) {
  const style = ALERT_STYLES[status] || ALERT_STYLES.info;
  return (
    <div
      className={["border-l-4 p-4 rounded-md mb-4", style, className]
        .filter(Boolean)
        .join(" ")}
      role="alert"
      {...props}
    >
      {children}
    </div>
  );
}

export default Alert;
