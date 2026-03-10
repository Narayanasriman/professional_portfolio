import video2 from "../assets/ExperienceVideo.mp4";
import PrimaryButton from "../components/Button";



export default function ExperiencePage() {
  return (
    <div className="relative w-full h-screen">
      <video src={video2} autoPlay muted loop playsInline className="w-full h-screen object-cover absolute top-0 left-0 z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent via-black/50 to-black z-10 pointer-events-none" />

      <div className="absolute flex flex-col gap-3 max-w-lg z-20" style={{ bottom: "220px", left: "120px" }}>
        <div className="flex flex-col leading-none">
          <span className="font-black uppercase" style={{ fontSize: "2rem", color: "#f5c518" }}>My</span>
          <span className="text-white font-black uppercase" style={{ fontSize: "3rem" }}>EXPERIENCE</span>
          <span className="font-bold" style={{ fontSize: "1.3rem", color: "#f5c518", marginTop: "0.25rem" }}>Frontend Developer Journey</span>
        </div>

        <div className="flex items-center gap-2 mt-1">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse inline-block" />
            <span className="text-white font-bold text-sm">FRESHER</span>
          </span>
          <span className="text-white/60 text-sm">•</span>
          <span className="text-white/80 text-sm">OPEN TO WORK</span>
          <span className="text-white/60 text-sm">•</span>
          <span className="text-white/80 text-sm">REACT DEVELOPER</span>
        </div>

        <p className="text-white/70 text-sm leading-relaxed max-w-md">
          Passionate frontend developer with hands-on experience building real-world projects using React, Tailwind CSS, and modern web technologies.
        </p>

        <PrimaryButton label="Watch Resume" className="w-80" onClick={() => window.open("/resume.pdf", "_blank")} />
      </div>
    </div>
  );
}