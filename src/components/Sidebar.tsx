import { useState } from "react";
import star from "../assets/star.png";
import { FaHome, FaBriefcase, FaGraduationCap, FaFolderOpen, FaUser } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useHeroSlide } from "../context/Heroslidecontext";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const { goTo } = useHeroSlide();
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { name: "Home",       icon: <FaHome />,          path: "/home",       slideIndex: 0 },
    { name: "Experience", icon: <FaBriefcase />,     path: "/home",       slideIndex: 1 },
    { name: "Projects",   icon: <FaFolderOpen />,    path: "/projects",   slideIndex: null },
    { name: "Education",  icon: <FaGraduationCap />, path: "/education",  slideIndex: null },
    { name: "Profile",    icon: <FaUser />,           path: "/profile",    slideIndex: null },
  ];

  const handleClick = (item: typeof menu[0]) => {
    if (item.slideIndex !== null) {
      navigate(item.path);
      setTimeout(() => goTo(item.slideIndex!), 100);
    }
  };

  const isActive = (item: typeof menu[0]) => location.pathname === item.path;

  return (
    <>
      {/* ─── DESKTOP SIDEBAR (md and above) — unchanged ─── */}
      <div
        style={{
          border: "none",
          outline: "none",
          boxShadow: "none",
          background: open
            ? "linear-gradient(to right, rgba(0,0,0,0.85) 60%, transparent 100%)"
            : "transparent",
        }}
        className={`hidden md:flex fixed left-0 top-0 h-screen z-50 flex-col transition-all duration-300 ${open ? "w-62" : "w-20"}`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {/* Star logo */}
        <div className="w-20 flex justify-center py-6">
          <img src={star} alt="logo" className="w-10 h-10" />
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-8 mt-14">
          {menu.map((item, index) =>
            item.slideIndex !== null ? (
              <button
                key={index}
                onClick={() => handleClick(item)}
                className="flex items-center gap-4 px-4 py-2 cursor-pointer group w-full text-left"
              >
                <div className="text-white text-2xl group-hover:scale-110 transition">{item.icon}</div>
                <span className={`text-white font-semibold whitespace-nowrap transition-all duration-300 ${open ? "opacity-100 translate-x-0 text-lg" : "opacity-0 -translate-x-3 text-base"}`}>
                  {item.name}
                </span>
              </button>
            ) : (
              <Link to={item.path} key={index} className="flex items-center gap-4 px-4 py-2 cursor-pointer group">
                <span className="text-white text-2xl group-hover:scale-110 transition">{item.icon}</span>
                <span className={`text-white font-semibold whitespace-nowrap transition-all duration-300 ${open ? "opacity-100 translate-x-0 text-lg" : "opacity-0 -translate-x-3 text-base"}`}>
                  {item.name}
                </span>
              </Link>
            )
          )}
        </div>
      </div>

      {/* ─── MOBILE BOTTOM NAV (below md) — JioHotstar style ─── */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.98) 60%, rgba(0,0,0,0.80) 100%)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <div className="flex items-center justify-around px-2 py-1">
          {menu.map((item, index) => {
            const active = isActive(item);
            return item.slideIndex !== null ? (
              <button
                key={index}
                onClick={() => handleClick(item)}
                className="flex flex-col items-center justify-center gap-1 flex-1 py-2 relative group"
              >
                {/* Active glow pill */}
                {active && (
                  <span
                    className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full"
                    style={{
                      width: "32px",
                      height: "3px",
                      background: "#f5c518",
                      boxShadow: "0 0 8px 2px #f5c51888",
                    }}
                  />
                )}
                <span
                  className="transition-all duration-200"
                  style={{
                    fontSize: "1.3rem",
                    color: active ? "#f5c518" : "rgba(255,255,255,0.5)",
                    filter: active ? "drop-shadow(0 0 6px #f5c518aa)" : "none",
                    transform: active ? "scale(1.15)" : "scale(1)",
                  }}
                >
                  {item.icon}
                </span>
                <span
                  style={{
                    fontSize: "0.6rem",
                    fontWeight: active ? 700 : 500,
                    color: active ? "#f5c518" : "rgba(255,255,255,0.45)",
                    letterSpacing: "0.04em",
                    lineHeight: 1,
                  }}
                >
                  {item.name}
                </span>
              </button>
            ) : (
              <Link
                to={item.path}
                key={index}
                className="flex flex-col items-center justify-center gap-1 flex-1 py-2 relative group"
              >
                {active && (
                  <span
                    className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full"
                    style={{
                      width: "32px",
                      height: "3px",
                      background: "#f5c518",
                      boxShadow: "0 0 8px 2px #f5c51888",
                    }}
                  />
                )}
                <span
                  className="transition-all duration-200"
                  style={{
                    fontSize: "1.3rem",
                    color: active ? "#f5c518" : "rgba(255,255,255,0.5)",
                    filter: active ? "drop-shadow(0 0 6px #f5c518aa)" : "none",
                    transform: active ? "scale(1.15)" : "scale(1)",
                  }}
                >
                  {item.icon}
                </span>
                <span
                  style={{
                    fontSize: "0.6rem",
                    fontWeight: active ? 700 : 500,
                    color: active ? "#f5c518" : "rgba(255,255,255,0.45)",
                    letterSpacing: "0.04em",
                    lineHeight: 1,
                  }}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}