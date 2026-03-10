import { useState } from "react";
import {  BookOpen, Award } from "lucide-react";
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
  image:string
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
    image:Graduation
  },
];

function CategoryBadge({ label }: { label: string }) {
  return (
    <span
      style={{
        background: "rgba(0,0,0,0.45)",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: "4px",
        padding: "2px 10px",
        fontSize: "11px",
        fontWeight: 700,
        letterSpacing: "0.08em",
        color: "#e0e0e0",
        textTransform: "uppercase" as const,
        backdropFilter: "blur(4px)",
      }}
    >
      {label}
    </span>
  );
}

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
        cursor: "default",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 60px rgba(0,0,0,0.5)"
          : "0 4px 20px rgba(0,0,0,0.3)",
        minHeight: "200px",
        maxWidth: "920px",
        margin: "0 auto",
      }}
    >
      {/* LEFT — Visual Panel */}
      <div
        style={{
          width: "320px",
          minWidth: "220px",
          position: "relative",
          overflow: "hidden",
          background: edu.gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {/* Subtle noise overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.12'/%3E%3C/svg%3E\")",
            opacity: 0.35,
            mixBlendMode: "overlay" as const,
            pointerEvents: "none",
          }}
        />

        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 50% 40%, rgba(255,255,255,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Icon */}
        <img
  src={edu.image}
  alt="graduation"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0,
  }}
/>

        {/* Grade badge */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            background: "rgba(0,0,0,0.35)",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: "8px",
            padding: "6px 16px",
            textAlign: "center",
            backdropFilter: "blur(6px)",
          }}
        >
          {/* <div
            style={{
              fontSize: "22px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            {edu.grade}
          </div> */}
          {/* <div
            style={{
              fontSize: "10px",
              color: "rgba(255,255,255,0.65)",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              marginTop: "2px",
            }}
          >
            {edu.gradeLabel}
          </div> */}
        </div>

        {/* Category badge — bottom left */}
        {/* <div style={{ position: "absolute", bottom: 12, left: 12, zIndex: 2 }}>
          <CategoryBadge label={edu.category} />
        </div> */}
      </div>

      {/* RIGHT — Details */}
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
        {/* Top: Degree + field */}
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
            {edu.degree} — {edu.field}
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
            {edu.institution}, {edu.location}
          </p>
        </div>

        {/* Duration row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "#64748b",
            fontSize: "12.5px",
            fontWeight: 500,
          }}
        >
          <BookOpen size={13} color="#64748b" />
          {edu.duration}
        </div>

        {/* Relevant coursework label */}
        <div>
          <p
            style={{
              margin: "0 0 6px",
              fontSize: "11px",
              color: "#475569",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
            }}
          >
            Relevant Coursework
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "6px" }}>
            {edu.courses.map((c) => (
              <CoursePill key={c.name} name={c.name} />
            ))}
          </div>
        </div>

        {/* Achievement row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "8px",
            padding: "8px 14px",
            width: "fit-content",
          }}
        >
          <Award size={13} color="#facc15" />
          <span style={{ fontSize: "12px", color: "#94a3b8", fontWeight: 500 }}>
            Graduated with <span style={{ color: "#facc15", fontWeight: 700 }}>{edu.grade} CGPA</span>
          </span>
        </div>
      </div>
    </div>
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
          minHeight: "100vh",
          background: "linear-gradient(160deg, #0d0f1a 0%, #111420 50%, #0a0c16 100%)",
          padding: "60px 48px",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Section Header */}
        <div style={{ marginBottom: "32px", marginLeft: "200px" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "26px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.01em",
            }}
          >
            Education
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

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {educationList.map((edu) => (
            <EducationCard key={edu.id} edu={edu} />
          ))}
        </div>
      </section>
    </>
  );
}