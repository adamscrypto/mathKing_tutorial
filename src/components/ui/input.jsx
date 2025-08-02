// src/components/ui/input.jsx
export function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
    />
  );
}


