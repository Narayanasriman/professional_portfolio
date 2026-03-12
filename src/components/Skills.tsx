import { FaReact, FaHtml5, FaGitAlt, FaFigma, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiTypescript, SiSupabase, SiPostgresql } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";

export default function Skills() {
  const skills = [
    { name: "React.js",       desc: "Building modern UI with reusable components",      icon: <FaReact className="text-5xl text-cyan-400" /> },
    { name: "JavaScript",     desc: "Strong understanding of ES6 and async programming", icon: <SiJavascript className="text-5xl text-yellow-400" /> },
    { name: "HTML5",          desc: "Semantic and accessible web structures",            icon: <FaHtml5 className="text-5xl text-orange-500" /> },
    { name: "CSS / Tailwind", desc: "Responsive and modern UI styling",                 icon: <SiTailwindcss className="text-5xl text-sky-400" /> },
    { name: "TypeScript",     desc: "Typed JavaScript for scalable applications",        icon: <SiTypescript className="text-5xl text-blue-500" /> },
    { name: "Git & GitHub",   desc: "Version control and collaboration",                 icon: <FaGitAlt className="text-5xl text-red-500" /> },
    { name: "REST API",       desc: "Working with APIs and data fetching",               icon: <TbApi className="text-5xl text-green-400" /> },
    { name: "Figma",          desc: "UI/UX design and prototyping",                     icon: <FaFigma className="text-5xl text-pink-400" /> },
    { name: "Database",       desc: "Understanding relational databases",                icon: <FaDatabase className="text-5xl text-purple-400" /> },
    { name: "SQL",            desc: "Relational database management",                   icon: <SiPostgresql className="text-5xl text-blue-400" /> },
    { name: "Supabase",       desc: "Backend services and authentication",              icon: <SiSupabase className="text-5xl text-green-500" /> },
    { name: "Clean Code",     desc: "Writing scalable and maintainable code",           icon: <VscCode className="text-5xl text-gray-300" /> },
  ];

  // Chunk into rows of 3 for mobile
  const mobileRows: (typeof skills)[] = [];
  for (let i = 0; i < skills.length; i += 3) {
    mobileRows.push(skills.slice(i, i + 3));
  }

  return (
    <>
      <style>{`
        .skill-scroll-row {
          display: flex;
          gap: 12px;
          padding: 0 16px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }
        .skill-scroll-row::-webkit-scrollbar { display: none; }
        .skill-scroll-row { scrollbar-width: none; ms-overflow-style: none; }

        .skill-card-mobile {
          flex-shrink: 0;
          width: calc((100vw - 56px) / 3);
          scroll-snap-align: start;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .skill-card-mobile:active { transform: scale(0.96); }

        .skill-thumb-mobile {
          width: 100%;
          height: 90px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1a1a2e, #0f3460);
        }
        .skill-thumb-mobile svg { font-size: 2rem !important; width: 2rem; height: 2rem; }

        .skill-name-mobile {
          color: white;
          font-weight: 600;
          font-size: 0.7rem;
          margin-top: 2px;
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .skill-desc-mobile {
          color: #9ca3af;
          font-size: 0.58rem;
          margin-top: 2px;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <section className="w-full pt-0 pb-4 bg-black ">
        <div className="mb-1 px-4 md:px-22">
          <h2 className="text-white text-2xl font-bold">Continue Watch My Skills</h2>
        </div>

        {/* ─── DESKTOP: 4-col grid — unchanged ─── */}
        <div className="hidden md:grid grid-cols-4 gap-6 pb-20 px-22 pr-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden cursor-pointer group hover:scale-105 transition duration-300"
            >
              <div
                className="w-full h-40 flex flex-col items-center justify-center gap-2"
                style={{ background: "linear-gradient(135deg, #1a1a2e, #0f3460)" }}
              >
                {skill.icon}
              </div>
              <div className="pt-2 pb-1">
                <h3 className="text-white text-xl font-semibold">{skill.name}</h3>
                <p className="text-gray-400 text-sm mt-0.5">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ─── MOBILE: rows of 3 with hidden horizontal scroll ─── */}
        <div className="md:hidden flex flex-col gap-5 pb-24">
          {mobileRows.map((row, rowIndex) => (
            <div key={rowIndex} className="skill-scroll-row">
              {row.map((skill, i) => (
                <div key={i} className="skill-card-mobile">
                  <div className="skill-thumb-mobile">
                    {skill.icon}
                  </div>
                  <div style={{ paddingTop: "2px", paddingBottom: "2px" }}>
                    <div className="skill-name-mobile">{skill.name}</div>
                    <div className="skill-desc-mobile">{skill.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}