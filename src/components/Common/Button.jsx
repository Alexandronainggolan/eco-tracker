export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
}