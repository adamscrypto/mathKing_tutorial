// src/components/Header.jsx
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-200 to-purple-200 py-4 px-6 flex justify-between items-center shadow-lg">
      <h1 className="text-3xl font-bold text-purple-900">Maths Tutorial</h1>
      <nav className="space-x-6">
        <Link to="/" className="text-blue-800 hover:underline font-medium">Home</Link>
        <Link to="/topics" className="text-blue-800 hover:underline font-medium">Topics</Link>
        <Link to="/contact" className="text-blue-800 hover:underline font-medium">Contact</Link>
        <Link to="/admin" className="text-blue-800 hover:underline font-medium">Admin</Link>
      </nav>
    </header>
  );
}