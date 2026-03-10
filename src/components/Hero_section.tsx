import { useEffect, useRef } from "react";
import video1 from "../assets/herovideo1.mp4";
import video2 from "../assets/ExperienceVideo.mp4";
import PrimaryButton from "./Button";
import resume from "../assets/SrimanNarayanaResume_910.pdf";
import { ChevronRight } from "lucide-react";
import { useHeroSlide } from "../context/Heroslidecontext";

const slides = [
  {
    video: video1,
    badge: "PORTFOLIO",
    tag: "FRONTEND DEVELOPER",
    thumbnailLabel: "Intro",
    thumbnailColor: "#f5c518",
    content: {
      eyebrow: "I am",
      title: "SRIMAN\nNARAYANA",
      subtitle: "THE Frontend Developer",
      statusDot: "bg-red-500",
      statusText: "AVAILABLE FOR WORK",
      tags: ["REACT DEVELOPER", "FRONTEND DEVELOPER"],
      description:
        "I build modern, responsive web applications using React, JavaScript, and Tailwind CSS. Passionate about creating clean UI, smooth user experiences, and scalable frontend architectures.",
    },
  },
  {
    video: video2,
    badge: "EXPERIENCE",
    tag: "REACT DEVELOPER",
    thumbnailLabel: "Experience",
    thumbnailColor: "#38bdf8",
    content: {
      eyebrow: "Frontend Developer",
      title: "NEXEVO\nTECHNOLOGIES",
      subtitle: "Nexevo Technologies",
      statusDot: "bg-green-500",
      statusText: "FRESHER",
      tags: ["OPEN TO WORK", "REACT DEVELOPER"],
      description:
        "Frontend Developer at Nexevo Technologies where I built responsive UI components using React.js, Tailwind CSS, and worked with APIs for dynamic web applications.",
    },
  },
];

export default function HeroVideo() {
  const { current, goTo, fading } = useHeroSlide();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = (fromIndex: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      goTo((fromIndex + 1) % slides.length);
    }, 8000);
  };

  useEffect(() => {
    startInterval(current);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [current]);

  const handleThumbnailClick = (index: number) => {
    goTo(index);
    startInterval(index);
  };

  const slide = slides[current];
  const { content } = slide;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        key={current}
        src={slide.video}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-screen object-cover absolute top-0 left-0 z-0"
        style={{
          opacity: fading ? 0 : 1,
          transition: "opacity 0.35s ease-in-out",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent via-black/50 to-black z-10 pointer-events-none" />

      {/* Main content (bottom-left) */}
      <div
        className="absolute flex flex-col gap-3 max-w-lg z-20"
        style={{
          bottom: "160px",
          left: "120px",
          opacity: fading ? 0 : 1,
          transform: fading ? "translateY(10px)" : "translateY(0)",
          transition: "opacity 0.35s ease, transform 0.35s ease",
        }}
      >
        {/* Badge + tag row */}
        <div className="flex items-center gap-2">
          <span
            className="text-xs font-bold px-2 py-0.5 rounded"
            style={{ background: slide.thumbnailColor, color: "#000" }}
          >
            {slide.badge}
          </span>
          <span className="text-white/60 text-xs">•</span>
          <span className="text-white/80 text-xs font-semibold">{slide.tag}</span>
        </div>

        {/* Title block */}
        <div className="flex flex-col leading-none">
          <span
            className="font-black uppercase"
            style={{ fontSize: "2rem", color: "#f5c518" }}
          >
            {content.eyebrow}
          </span>
          <span
            className="text-white font-black uppercase whitespace-pre-line"
            style={{ fontSize: "3rem" }}
          >
            {content.title}
          </span>
          <span
            className="font-bold"
            style={{
              fontSize: "1.3rem",
              color: slide.thumbnailColor,
              marginTop: "0.25rem",
            }}
          >
            {content.subtitle}
          </span>
        </div>

        {/* Status row */}
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          <span className="flex items-center gap-1.5">
            <span
              className={`w-2.5 h-2.5 rounded-full animate-pulse inline-block ${content.statusDot}`}
            />
            <span className="text-white font-bold text-sm">
              {content.statusText}
            </span>
          </span>
          {content.tags.map((t, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="text-white/60 text-sm">•</span>
              <span className="text-white/80 text-sm">{t}</span>
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-white/70 text-sm leading-relaxed max-w-md">
          {content.description}
        </p>

        <PrimaryButton
          label="Watch Resume"
          className="w-80"
          onClick={() => window.open(resume, "_blank")}
        />
      </div>

      {/* HOTSTAR-STYLE THUMBNAIL STRIP (bottom-right) */}
      <div
        className="absolute z-20 flex items-center gap-3"
        style={{ bottom: "160px", right: "40px" }}
      >
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => handleThumbnailClick(i)}
            className="relative rounded-lg overflow-hidden cursor-pointer flex-shrink-0"
            style={{
              width: i === current ? "120px" : "90px",
              height: i === current ? "68px" : "52px",
              border:
                i === current
                  ? `2px solid ${s.thumbnailColor}`
                  : "2px solid rgba(255,255,255,0.2)",
              transition: "all 0.3s ease",
              background: "#111",
            }}
          >
            <video
              src={s.video}
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{
                filter: i === current ? "none" : "brightness(0.45)",
                transition: "filter 0.3s ease",
              }}
              onLoadedMetadata={(e) => {
                (e.target as HTMLVideoElement).currentTime = 1;
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 px-1.5 py-0.5 text-center"
              style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.85))" }}
            >
              <span className="text-white font-bold block" style={{ fontSize: "0.6rem" }}>
                {s.thumbnailLabel}
              </span>
            </div>
            {i === current && (
              <div
                key={`progress-${current}`}
                className="absolute bottom-0 left-0 h-0.5"
                style={{
                  background: s.thumbnailColor,
                  width: "100%",
                  transformOrigin: "left",
                  animation: "hs-progress 8s linear forwards",
                }}
              />
            )}
          </button>
        ))}

        {/* Next arrow */}
        <button
          onClick={() => handleThumbnailClick((current + 1) % slides.length)}
          className="flex items-center justify-center rounded-full text-white/70 hover:text-white transition-colors hover:bg-white/20"
          style={{
            width: "32px",
            height: "32px",
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <style>{`
        @keyframes hs-progress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}