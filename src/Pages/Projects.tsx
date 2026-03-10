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
  
  image:string;
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
    image:FoodDelivery,
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
        padding: "4px 12px",
        fontSize: "12px",
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
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "row",
        borderRadius: "12px",
        overflow: "hidden",
        background: hovered ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
        border: hovered
          ? "1px solid rgba(255,255,255,0.18)"
          : "1px solid rgba(255,255,255,0.07)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 60px rgba(0,0,0,0.5)"
          : "0 4px 20px rgba(0,0,0,0.3)",
        minHeight: "200px",
        maxWidth: "920px",   // 👈 add this
  margin: "0 auto",    // 👈 center card
      }}
    >
      {/* LEFT — Thumbnail / Visual */}
      <div
        style={{
          width: "320px",
          minWidth: "120px",
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(135deg, var(--g1), var(--g2), var(--g3))`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
        className={`bg-gradient-to-br ${project.gradient}`}
      >
        {/* Noise/texture overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E\")",
            backgroundSize: "cover",
            opacity: 0.4,
            mixBlendMode: "overlay" as const,
            pointerEvents: "none",
          }}
        />
        {/* Play button overlay on hover */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              transform: hovered ? "scale(1)" : "scale(0.7)",
              transition: "transform 0.3s ease",
            }}
          >
            ▶
          </div>
        </div>
        {/* Big icon */}
        <img
  src={project.image}
  alt={project.title}
  style={{
   width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0,
  }}
/>
        {/* Category chip bottom-left */}
        <div style={{ position: "absolute", bottom: 12, left: 12, zIndex: 2 }}>
          <CategoryBadge label={project.category} />
        </div>
      </div>

      {/* RIGHT — Project Details */}
      <div
        style={{
          flex: 1,
          padding: "28px 32px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        {/* Top: Title + subtitle */}
        <div>
          <h3
            style={{
              margin: 0,
              fontSize: "22px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              margin: "6px 0 0",
              fontSize: "13px",
              color: "#7eb3ff",
              fontWeight: 500,
              letterSpacing: "0.01em",
            }}
          >
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p
          style={{
            margin: 0,
            fontSize: "13.5px",
            color: "#9aa3b2",
            lineHeight: 1.7,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical" as const,
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>

        {/* Tech pills */}
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "6px" }}>
          {project.technologies.map((tech) => (
            <TechPill key={tech} tech={tech} />
          ))}
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
          <a
            href={project.liveUrl || project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "linear-gradient(135deg, #1a8cff, #0066dd)",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              padding: "9px 20px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "none",
              transition: "opacity 0.2s",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            ▶ &nbsp;{project.liveUrl ? "Live Demo" : "View Repo"}
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(255,255,255,0.07)",
              color: "#cdd5e0",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "6px",
              padding: "9px 20px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "none",
              transition: "background 0.2s",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.13)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.07)")
            }
          >
            ⌥ &nbsp;GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <>
      {/* Google Font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
      `}</style>

      <section
        style={{
          minHeight: "100vh",
          background: "linear-gradient(160deg, #0d0f1a 0%, #111420 50%, #0a0c16 100%)",
          padding: "60px 48px",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Section Header — Hotstar-style */}
        <div style={{ marginBottom: "32px",marginLeft:"200px" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "26px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.01em",
              
            }}
          >
            Projects
          </h2>
          <div
            style={{
              width: "40px",
              height: "3px",
              background: "linear-gradient(90deg, #1a8cff, #7b2ff7)",
              borderRadius: "2px",
              marginTop: "8px",
            }}
          />
        </div>

        {/* Cards — one per row */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}