import { Link } from "react-router-dom";
import { FaHome, FaBook, FaUsers, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-5">
      <h2 className="text-2xl font-bold mb-6">Library System</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="flex items-center gap-2 hover:text-gray-400">
          <FaHome /> Home
        </Link>

        {user?.role === "admin" && (
          <Link to="/admin" className="flex items-center gap-2 hover:text-gray-400">
            <FaUsers /> Manage Users
          </Link>
        )}

        <Link to="/books" className="flex items-center gap-2 hover:text-gray-400">
          <FaBook /> Books
        </Link>

        <button onClick={logout} className="flex items-center gap-2 mt-auto bg-red-500 p-2 rounded">
          <FaSignOutAlt /> Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
