import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-red-600 text-2xl font-bold">VISHAL</h1>

        <div className="flex gap-6 text-white">
          <Link to="/" className="hover:text-red-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-red-500">
            About
          </Link>
          <Link to="/contact" className="hover:text-red-500">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}