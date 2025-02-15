
import { Home, BarChart2, Calendar, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/40 backdrop-blur-xl border-t border-white/10 p-4">
      <div className="max-w-screen-xl mx-auto flex justify-around items-center">
        {[
          { icon: Home, path: "/", label: "Home" },
          { icon: BarChart2, path: "/stats", label: "Stats" },
          { icon: Calendar, path: "/calendar", label: "Calendar" },
          { icon: User, path: "/profile", label: "Profile" },
        ].map(({ icon: Icon, path, label }) => (
          <button
            key={path}
            onClick={() => navigate(path)}
            className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-lg transition-all duration-300 ${
              isActive(path)
                ? "text-highlight scale-110"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Icon size={20} />
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
