import { useState } from "react";
import star from "../assets/star.png";
import { FaHome,  FaBriefcase, FaGraduationCap, FaFolderOpen,FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useHeroSlide } from "../context/Heroslidecontext";


export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const { goTo } = useHeroSlide();
  const navigate = useNavigate();

  const menu = [
    { name: "Home",       icon: <FaHome />,        path: "/home",       slideIndex: 0 },
   
    { name: "Experience", icon: <FaBriefcase />,   path: "/home",       slideIndex: 1 }, 
    
    { name: "Projects",   icon: <FaFolderOpen />,  path: "/projects",   slideIndex: null },
    { name: "Education",  icon: <FaGraduationCap />, path: "/education", slideIndex: null },
   {
  name: "Profile",
  icon: <FaUser />,
  path: "/profile",
  slideIndex: null
}
    
    
  ];

  const handleClick = (item: typeof menu[0]) => {
    // If this item controls a hero slide, navigate home and switch slide
    if (item.slideIndex !== null) {
      navigate(item.path);
      // Small delay so the home page mounts before we trigger the slide
      setTimeout(() => goTo(item.slideIndex!), 100);
    }
    // Otherwise just let <Link> handle normal navigation
  };

  return (
    <div
      style={{
        border: "none",
        outline: "none",
        boxShadow: "none",
        background: open
          ? "linear-gradient(to right, rgba(0,0,0,0.85) 60%, transparent 100%)"
          : "transparent",
      }}
      className={`fixed left-0 top-0 h-screen z-50 transition-all duration-300
        ${open ? "w-62" : "w-20"}
      `}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Star logo */}
      <div className="w-20 flex justify-center py-6">
        <img src={star} alt="logo" className="w-10 h-10" />
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-8 mt-14">
        {menu.map((item, index) => (
          item.slideIndex !== null ? (
            // Items that control a slide: use a button + imperative navigation
            <button
              key={index}
              onClick={() => handleClick(item)}
              className="flex items-center gap-4 px-4 py-2 cursor-pointer group w-full text-left"
            >
              <div className="text-white text-2xl group-hover:scale-110 transition">
                {item.icon}
              </div>
              <span
                className={`text-white font-semibold whitespace-nowrap transition-all duration-300
                  ${open ? "opacity-100 translate-x-0 text-lg" : "opacity-0 -translate-x-3 text-base"}
                `}
              >
                {item.name}
              </span>
            </button>
          ) : (
            // Normal navigation items
            <Link
              to={item.path}
              key={index}
              className="flex items-center gap-4 px-4 py-2 cursor-pointer group"
            >
              <span className="text-white text-2xl group-hover:scale-110 transition">
                {item.icon}
              </span>
              <span
                className={`text-white font-semibold whitespace-nowrap transition-all duration-300
                  ${open ? "opacity-100 translate-x-0 text-lg" : "opacity-0 -translate-x-3 text-base"}
                `}
              >
                {item.name}
              </span>
            </Link>
          )
        ))}
      </div>
    </div>
  );
}