import { useNavigate } from "react-router-dom";
import { removeCookie } from "react-use-cookie";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeCookie("my_token");
    navigate("/");
  };
  return (
    <button
  onClick={handleLogout}
  className="text-[#A16207] hover:text-white border border-[#A16207] hover:bg-[#A16207] focus:ring-4 focus:outline-none focus:ring-[#A16207]/30 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
>
  Logout
</button>
  );
};

export default Logout;