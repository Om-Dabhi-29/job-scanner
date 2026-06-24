import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-sky-600">
          🔍 Fake Job Detector
        </h1>

        <div className="flex gap-6 font-medium">
          <Link to="/" className="hover:text-sky-500">Home</Link>
          <Link to="/scan" className="hover:text-sky-500">Scan</Link>
          <Link to="/results" className="hover:text-sky-500">Results</Link>
          <Link to="/about" className="hover:text-sky-500">About</Link>
          <Link to="/contact" className="hover:text-sky-500">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;