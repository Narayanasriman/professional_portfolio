import { FaReact, FaHtml5, FaGitAlt, FaFigma, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiTypescript, SiSupabase, SiPostgresql } from "react-icons/si";
import { TbApi } from "react-icons/tb";

import { VscCode } from "react-icons/vsc";

export default function Skills() {
  const skills = [
    { name: "React.js", desc: "Building modern UI with reusable components", icon: <FaReact className="text-5xl text-cyan-400" /> },
    { name: "JavaScript", desc: "Strong understanding of ES6 and async programming", icon: <SiJavascript className="text-5xl text-yellow-400" /> },
    { name: "HTML5", desc: "Semantic and accessible web structures", icon: <FaHtml5 className="text-5xl text-orange-500" /> },
    { name: "CSS / Tailwind", desc: "Responsive and modern UI styling", icon: <SiTailwindcss className="text-5xl text-sky-400" /> },

    { name: "TypeScript", desc: "Typed JavaScript for scalable applications", icon: <SiTypescript className="text-5xl text-blue-500" /> },
    { name: "Git & GitHub", desc: "Version control and collaboration", icon: <FaGitAlt className="text-5xl text-red-500" /> },
    { name: "REST API", desc: "Working with APIs and data fetching", icon: <TbApi className="text-5xl text-green-400" /> },
    { name: "Figma", desc: "UI/UX design and prototyping", icon: <FaFigma className="text-5xl text-pink-400" /> },

    { name: "Database", desc: "Understanding relational databases", icon: <FaDatabase className="text-5xl text-purple-400" /> },
    { name: "SQL", desc: "Relational database management", icon: <SiPostgresql className="text-5xl text-blue-400" /> },
    { name: "Supabase", desc: "Backend services and authentication", icon: <SiSupabase className="text-5xl text-green-500" /> },
    { name: "Clean Code", desc: "Writing scalable and maintainable code", icon: <VscCode className="text-5xl text-gray-300" /> },
  ];

  return (
    <section className="w-full pt-0 pb-4 px-22 pr-2 bg-black">
      <div className="mb-3 px-4">
        <h2 className="text-white text-2xl font-bold">Continue Watch My Skills</h2>
      </div>

      {/* Grid layout (4 cards per row) */}
      <div className="grid grid-cols-4 gap-6 pb-20 px-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden cursor-pointer group hover:scale-105 transition duration-300"
          >
            {/* Thumbnail */}
            <div
              className="w-full h-40 relative flex flex-col items-center justify-center gap-2"
              style={{ background: "linear-gradient(135deg, #1a1a2e, #0f3460)" }}
            >
              {skill.icon}
            </div>

            {/* Text below */}
            <div className="pt-2 pb-1">
              <h3 className="text-white text-xl font-semibold">{skill.name}</h3>
              <p className="text-gray-400 text-sm mt-0.5">{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}