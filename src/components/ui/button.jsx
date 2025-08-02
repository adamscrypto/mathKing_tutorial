export function Button({ children, onClick, className = "", variant = "default", type = "button" }) {
  const baseStyle = "rounded px-4 py-2 text-white font-semibold focus:outline-none focus:ring transition duration-200";
  const variantStyle = {
    default: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-300",
    outline: "bg-white text-blue-700 border border-blue-600 hover:bg-blue-50",
    danger: "bg-red-600 hover:bg-red-700 focus:ring-red-300"
  };
  return (
    <button onClick={onClick} type={type} className={`${baseStyle} ${variantStyle[variant]} ${className}`}>
      {children}
    </button>
  );
}