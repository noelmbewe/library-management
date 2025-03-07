import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    if (role === "admin") navigate("/admin");
    else if (role === "librarian") navigate("/librarian");
    else if (role === "patron") navigate("/patron");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Library Login</h2>
      <button className="p-2 bg-blue-500 text-white m-2" onClick={() => handleLogin("admin")}>Login as Admin</button>
      <button className="p-2 bg-green-500 text-white m-2" onClick={() => handleLogin("librarian")}>Login as Librarian</button>
      <button className="p-2 bg-yellow-500 text-white m-2" onClick={() => handleLogin("patron")}>Login as Patron</button>
    </div>
  );
};

export default Login;
