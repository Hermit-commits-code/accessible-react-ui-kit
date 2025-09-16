function Card({ children, className = "", ...rest }) {
  return (
    <div
      className={["bg-white rounded-lg shadow p-4", className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </div>
  );
}
export default Card;
