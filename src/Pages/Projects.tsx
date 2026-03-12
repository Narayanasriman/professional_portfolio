import { useState } from "react";
import FoodDelivery from "../assets/FoodDelivery.jpg";
import MovieFinder from "../assets/movieApp.jpg";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  liveUrl?: string;
  category: string;
  gradient: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "FoodieHub",
    subtitle: "A React-based Food Delivery Platform",
    description:
      "Designed an interactive and scalable food ordering system with real-time updates and a seamless user experience. Built a responsive food delivery platform with a modern user interface, dynamic restaurant listings, food ordering, cart management, and order tracking features.",
    technologies: ["React.js", "JavaScript (ES6+)", "CSS", "HTML", "React Router", "GitHub Pages"],
    repoUrl: "https://github.com/Narayanasriman/food-Delivery.git",
    liveUrl: "https://food-delivery-lzb9.vercel.app/",
    category: "Frontend",
    gradient: "from-orange-600 via-red-500 to-pink-600",
    image: FoodDelivery,
  },
  {
    id: 2,
    title: "Movie Finder App",
    subtitle: "API-driven Movie Discovery Interface",
    description:
      "Developed an API-driven movie discovery interface providing instant search and detailed IMDb-based insights. Built with the OMDb API, displaying movie titles, posters, and IMDb ratings with efficient UI rendering and state management.",
    technologies: ["React.js", "JavaScript (ES6+)", "CSS", "HTML", "OMDb API", "GitHub Pages"],
    repoUrl: "https://github.com/Narayanasriman/Movie-finder-app.git",
    category: "Frontend",
    gradient: "from-blue-700 via-purple-600 to-indigo-700",
    image: MovieFinder,
  },
];

function CategoryBadge({ label }: { label: string }) {
  return (
    <span
      style={{
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: "4px",
        padding: "2px 10px",
        fontSize: "11px",
        fontWeight: 600,
        letterSpacing: "0.08em",
        color: "#e0e0e0",
        textTransform: "uppercase" as const,
      }}
    >
      {label}
    </span>
  );
}

function TechPill({ tech }: { tech: string }) {
  return (
    <span
      style={{
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.13)",
        borderRadius: "20px",
        padding: "3px 10px",
        fontSize: "11px",
        color: "#b0b8c8",
        fontWeight: 500,
        whiteSpace: "nowrap" as const,
      }}
    >
      {tech}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      {/* ─── DESKTOP card (md and above) — unchanged ─── */}
      <div
        className="hidden md:flex"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          flexDirection: "row",
          borderRadius: "12px",
          overflow: "hidden",
          background: hovered ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
          border: hovered ? "1px solid rgba(255,255,255,0.18)" : "1px solid rgba(255,255,255,0.07)",
          transition: "all 0.3s ease",
          cursor: "pointer",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
          boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.3)",
          minHeight: "200px",
          maxWidth: "920px",
          margin: "0 auto",
        }}
      >
        {/* LEFT — Thumbnail */}
        <div
          style={{
            width: "320px",
            minWidth: "120px",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
          className={`bg-gradient-to-br ${project.gradient}`}
        >
          <div
            style={{
              position: "absolute", inset: 0,
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E\")",
              backgroundSize: "cover", opacity: 0.4, mixBlendMode: "overlay" as const, pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute", inset: 0, background: "rgba(0,0,0,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: hovered ? 1 : 0, transition: "opacity 0.3s ease",
            }}
          >
            <div style={{
              width: 52, height: 52, borderRadius: "50%", background: "rgba(255,255,255,0.9)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px",
              transform: hovered ? "scale(1)" : "scale(0.7)", transition: "transform 0.3s ease",
            }}>▶</div>
          </div>
          <img src={project.image} alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }}
          />
          <div style={{ position: "absolute", bottom: 12, left: 12, zIndex: 2 }}>
            <CategoryBadge label={project.category} />
          </div>
        </div>

        {/* RIGHT — Details */}
        <div style={{ flex: 1, padding: "28px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "12px" }}>
          <div>
            <h3 style={{ margin: 0, fontSize: "22px", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.2, fontFamily: "'DM Sans', sans-serif" }}>
              {project.title}
            </h3>
            <p style={{ margin: "6px 0 0", fontSize: "13px", color: "#7eb3ff", fontWeight: 500 }}>{project.subtitle}</p>
          </div>
          <p style={{ margin: 0, fontSize: "13.5px", color: "#9aa3b2", lineHeight: 1.7, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>
            {project.description}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "6px" }}>
            {project.technologies.map((tech) => <TechPill key={tech} tech={tech} />)}
          </div>
          <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
            <a href={project.liveUrl || project.repoUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "linear-gradient(135deg, #1a8cff, #0066dd)", color: "#fff", border: "none", borderRadius: "6px", padding: "9px 20px", fontSize: "13px", fontWeight: 600, cursor: "pointer", textDecoration: "none", letterSpacing: "0.02em" }}
            >▶ &nbsp;{project.liveUrl ? "Live Demo" : "View Repo"}</a>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,0.07)", color: "#cdd5e0", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "6px", padding: "9px 20px", fontSize: "13px", fontWeight: 600, cursor: "pointer", textDecoration: "none", letterSpacing: "0.02em" }}
            >⌥ &nbsp;GitHub</a>
          </div>
        </div>
      </div>

      {/* ─── MOBILE card (below md) ─── */}
      <div
        className="md:hidden w-full rounded-xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.09)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
        }}
      >
        {/* Image on top — full width, fixed height */}
        <div className={`relative w-full bg-gradient-to-br ${project.gradient}`} style={{ height: "180px" }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }}
          />
          {/* gradient overlay at bottom */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)", pointerEvents: "none" }} />

          {/* Category badge bottom-left */}
          <div style={{ position: "absolute", bottom: 10, left: 12, zIndex: 2 }}>
            <CategoryBadge label={project.category} />
          </div>

          {/* Live / Repo button — top right */}
          <div style={{ position: "absolute", top: 10, right: 12, zIndex: 2 }}>
            <a
              href={project.liveUrl || project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "4px",
                background: "rgba(26,140,255,0.85)",
                backdropFilter: "blur(8px)",
                color: "#fff", borderRadius: "6px",
                padding: "5px 12px", fontSize: "11px", fontWeight: 700,
                textDecoration: "none", letterSpacing: "0.03em",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              ▶ {project.liveUrl ? "Live" : "Repo"}
            </a>
          </div>
        </div>

        {/* Text content */}
        <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
          {/* Title + subtitle */}
          <div>
            <h3 style={{ margin: 0, fontSize: "17px", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.01em", lineHeight: 1.2, fontFamily: "'DM Sans', sans-serif" }}>
              {project.title}
            </h3>
            <p style={{ margin: "4px 0 0", fontSize: "12px", color: "#7eb3ff", fontWeight: 500 }}>
              {project.subtitle}
            </p>
          </div>

          {/* Description — 3 line clamp */}
          <p style={{
            margin: 0, fontSize: "12px", color: "#9aa3b2", lineHeight: 1.6,
            display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" as const, overflow: "hidden",
          }}>
            {project.description}
          </p>

          {/* Tech pills — horizontal scroll, no scrollbar */}
          <div style={{
            display: "flex", gap: "6px", overflowX: "auto",
            scrollbarWidth: "none", msOverflowStyle: "none",
            paddingBottom: "2px",
          }}>
            <style>{`.tech-scroll::-webkit-scrollbar{display:none}`}</style>
            <div className="tech-scroll" style={{ display: "flex", gap: "6px", flexShrink: 0 }}>
              {project.technologies.map((tech) => <TechPill key={tech} tech={tech} />)}
            </div>
          </div>

          {/* Buttons row */}
          <div style={{ display: "flex", gap: "8px", marginTop: "2px" }}>
            <a
              href={project.liveUrl || project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center",
                gap: "5px", background: "linear-gradient(135deg, #1a8cff, #0066dd)",
                color: "#fff", borderRadius: "7px", padding: "9px 0",
                fontSize: "12px", fontWeight: 700, textDecoration: "none", letterSpacing: "0.02em",
              }}
            >
              ▶ &nbsp;{project.liveUrl ? "Live Demo" : "View Repo"}
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center",
                gap: "5px", background: "rgba(255,255,255,0.07)",
                color: "#cdd5e0", border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "7px", padding: "9px 0",
                fontSize: "12px", fontWeight: 700, textDecoration: "none", letterSpacing: "0.02em",
              }}
            >
              ⌥ &nbsp;GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default function ProjectsSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
      `}</style>

      <section
        style={{
          minHeight: "100vh",
          background: "linear-gradient(160deg, #0d0f1a 0%, #111420 50%, #0a0c16 100%)",
          fontFamily: "'DM Sans', sans-serif",
        }}
        className="px-4 py-10 md:px-12 md:py-16"
      >
        {/* Section Header */}
        <div className="mb-6 md:mb-8" style={{ marginLeft: 0 }}>
          <div className="md:ml-[200px]">
            <h2 style={{ margin: 0, fontSize: "clamp(20px, 5vw, 26px)", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.01em" }}>
              Projects
            </h2>
            <div style={{ width: "40px", height: "3px", background: "linear-gradient(90deg, #1a8cff, #7b2ff7)", borderRadius: "2px", marginTop: "8px" }} />
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4 md:gap-5 md:ml-[200px] md:mr-0">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom padding for mobile nav */}
        <div className="md:hidden h-20" />
      </section>
    </>
  );
}