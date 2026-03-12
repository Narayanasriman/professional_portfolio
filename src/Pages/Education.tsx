import { useState } from "react";
import { BookOpen, Award } from "lucide-react";
import Graduation from "../assets/Graduation.jpg";

interface Course {
  name: string;
}

interface Education {
  id: number;
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
  gradeLabel: string;
  category: string;
  gradient: string;
  courses: Course[];
  image: string;
}

const educationList: Education[] = [
  {
    id: 1,
    degree: "B.Tech",
    field: "Computer Science",
    institution: "Bharath University",
    location: "Chennai, Tamil Nadu",
    duration: "Graduated May 2024",
    grade: "8.5",
    gradeLabel: "CGPA",
    category: "Undergraduate",
    gradient: "linear-gradient(135deg, #0f4c81, #1a6fb5, #0e7490)",
    courses: [
      { name: "Web Technologies" },
      { name: "Database Management Systems" },
      { name: "Software Engineering" },
    ],
    image: Graduation,
  },
];

function CoursePill({ name }: { name: string }) {
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
      {name}
    </span>
  );
}

function EducationCard({ edu }: { edu: Education }) {
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
          cursor: "default",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
          boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.3)",
          minHeight: "200px",
          maxWidth: "920px",
          margin: "0 auto",
        }}
      >
        {/* LEFT — Visual */}
        <div
          style={{
            width: "320px", minWidth: "220px",
            position: "relative", overflow: "hidden",
            background: edu.gradient,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, flexDirection: "column", gap: "12px",
          }}
        >
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.12'/%3E%3C/svg%3E\")", opacity: 0.35, mixBlendMode: "overlay" as const, pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 40%, rgba(255,255,255,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
          <img src={edu.image} alt="graduation" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }} />
          <div style={{ position: "relative", zIndex: 1, background: "rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "8px", padding: "6px 16px", textAlign: "center", backdropFilter: "blur(6px)" }} />
        </div>

        {/* RIGHT — Details */}
        <div style={{ flex: 1, padding: "28px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "12px" }}>
          <div>
            <h3 style={{ margin: 0, fontSize: "22px", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.2, fontFamily: "'DM Sans', sans-serif" }}>
              {edu.degree} — {edu.field}
            </h3>
            <p style={{ margin: "6px 0 0", fontSize: "13px", color: "#7eb3ff", fontWeight: 500 }}>
              {edu.institution}, {edu.location}
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#64748b", fontSize: "12.5px", fontWeight: 500 }}>
            <BookOpen size={13} color="#64748b" />
            {edu.duration}
          </div>
          <div>
            <p style={{ margin: "0 0 6px", fontSize: "11px", color: "#475569", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
              Relevant Coursework
            </p>
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "6px" }}>
              {edu.courses.map((c) => <CoursePill key={c.name} name={c.name} />)}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "8px 14px", width: "fit-content" }}>
            <Award size={13} color="#facc15" />
            <span style={{ fontSize: "12px", color: "#94a3b8", fontWeight: 500 }}>
              Graduated with <span style={{ color: "#facc15", fontWeight: 700 }}>{edu.grade} CGPA</span>
            </span>
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
        {/* Image on top */}
        <div className="relative w-full" style={{ height: "170px", background: edu.gradient }}>
          <img
            src={edu.image}
            alt="graduation"
            style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)", pointerEvents: "none" }} />

          {/* CGPA badge — bottom right of image */}
          <div
            style={{
              position: "absolute", bottom: 10, right: 12, zIndex: 2,
              background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: "8px", padding: "4px 12px",
              display: "flex", alignItems: "center", gap: "5px",
            }}
          >
            <Award size={11} color="#facc15" />
            <span style={{ fontSize: "11px", color: "#facc15", fontWeight: 700 }}>{edu.grade} CGPA</span>
          </div>

          {/* Category badge — bottom left */}
          <div
            style={{
              position: "absolute", bottom: 10, left: 12, zIndex: 2,
              background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "4px", padding: "2px 10px",
              fontSize: "10px", fontWeight: 600, color: "#e0e0e0",
              letterSpacing: "0.08em", textTransform: "uppercase" as const,
            }}
          >
            {edu.category}
          </div>
        </div>

        {/* Text content */}
        <div style={{ padding: "14px 16px 18px", display: "flex", flexDirection: "column", gap: "10px" }}>
          {/* Degree + institution */}
          <div>
            <h3 style={{ margin: 0, fontSize: "17px", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.01em", lineHeight: 1.2, fontFamily: "'DM Sans', sans-serif" }}>
              {edu.degree} — {edu.field}
            </h3>
            <p style={{ margin: "4px 0 0", fontSize: "12px", color: "#7eb3ff", fontWeight: 500 }}>
              {edu.institution}, {edu.location}
            </p>
          </div>

          {/* Duration */}
          <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#64748b", fontSize: "12px", fontWeight: 500 }}>
            <BookOpen size={12} color="#64748b" />
            {edu.duration}
          </div>

          {/* Coursework */}
          <div>
            <p style={{ margin: "0 0 6px", fontSize: "10px", color: "#475569", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
              Relevant Coursework
            </p>
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "6px" }}>
              {edu.courses.map((c) => <CoursePill key={c.name} name={c.name} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function EducationSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
      `}</style>

      <section
        style={{
          background: "linear-gradient(160deg, #0d0f1a 0%, #111420 50%, #0a0c16 100%)",
          fontFamily: "'DM Sans', sans-serif",
        }}
        className="px-4 py-10 md:px-12 md:py-[60px]"
      >
        {/* Section Header */}
        <div className="mb-6 md:mb-8 md:ml-[200px]">
          <h2 style={{ margin: 0, fontSize: "clamp(20px, 5vw, 26px)", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.01em" }}>
            Education
          </h2>
          <div style={{ width: "40px", height: "3px", background: "linear-gradient(90deg, #1a8cff, #7b2ff7)", borderRadius: "2px", marginTop: "8px" }} />
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4 md:gap-5 md:ml-[200px] md:mr-0">
          {educationList.map((edu) => (
            <EducationCard key={edu.id} edu={edu} />
          ))}
        </div>

        {/* Bottom spacer for mobile nav */}
        <div className="md:hidden h-20" />
      </section>
    </>
  );
}