import { Github, Linkedin, Mail, MessageCircle, Code2, ArrowUpRight } from "lucide-react";
import ProfileImg from '../assets/linkedinProfile.jpg';
import resume from '../assets/SrimanNarayanaResume_910.pdf'

const WHATSAPP_NUMBER = "919948194994";
const WHATSAPP_MSG = encodeURIComponent("Hi Sriman! I came across your portfolio and would love to connect.");

export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Mulish:wght@300;400;500;600&display=swap');

        .hero-root {
          min-height: 100vh;
          width: 100%;
          background: #080b14;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 48px;
          position: relative;
          overflow: hidden;
          font-family: 'Mulish', sans-serif;
        }

        .hero-blob-tl {
          position: absolute;
          top: -100px; left: -100px;
          width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .hero-blob-br {
          position: absolute;
          bottom: -80px; right: -80px;
          width: 340px; height: 340px;
          background: radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .hero-inner {
          display: flex;
          align-items: center;
          gap: 72px;
          max-width: 1000px;
          width: 100%;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        /* ── LEFT: image ── */
        .hero-image-wrap {
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
          width: 280px;
        }

        .hero-image-wrap::before {
          content: '';
          position: absolute;
          inset: -5px;
          border-radius: 24px;
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #0ea5e9 100%);
          z-index: 0;
          opacity: 0.65;
        }

        .hero-image-wrap::after {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 22px;
          background: #080b14;
          z-index: 1;
        }

        .hero-img {
          width: 280px;
          height: 360px;
          object-fit: cover;
          border-radius: 20px;
          display: block;
          position: relative;
          overflow: hidden;
          z-index: 2;
          filter: saturate(0.9) contrast(1.05);
        }

        .status-dot {
          position: absolute;
          bottom: 16px; right: -12px;
          z-index: 3;
          background: #0f172a;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 30px;
          padding: 5px 12px 5px 8px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Mulish', sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: #94a3b8;
          white-space: nowrap;
        }

        .dot-pulse {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #22c55e;
          animation: pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.45; transform: scale(0.75); }
        }

        /* ── RIGHT: content ── */
        .hero-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 18px;
          min-width: 0;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(37,99,235,0.12);
          border: 1px solid rgba(37,99,235,0.28);
          border-radius: 30px;
          padding: 5px 14px;
          font-size: 11px;
          font-weight: 700;
          color: #60a5fa;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          width: fit-content;
        }

        .hero-name {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 4vw, 52px);
          font-weight: 800;
          color: #f8fafc;
          line-height: 1.05;
          letter-spacing: -0.03em;
        }

        .hero-name span {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-designation {
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #475569;
        }

        .hero-designation em { font-style: normal; color: #7c3aed; }

        .hero-divider {
          width: 38px; height: 2px;
          background: linear-gradient(90deg, #3b82f6, transparent);
          border-radius: 2px;
        }

        .hero-desc {
          font-size: 14px;
          color: #64748b;
          line-height: 1.8;
          font-weight: 400;
        }

        .hero-desc strong { color: #94a3b8; font-weight: 600; }

        .stats-row { display: flex; gap: 24px; }

        .stat-item { display: flex; flex-direction: column; gap: 2px; }

        .stat-value {
          font-family: 'Syne', sans-serif;
          font-size: 21px; font-weight: 800;
          color: #f1f5f9; letter-spacing: -0.02em;
        }

        .stat-label {
          font-size: 10.5px; color: #475569;
          font-weight: 600; letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .stat-sep { width: 1px; height: 34px; background: rgba(255,255,255,0.07); align-self: center; }

        .social-row { display: flex; align-items: center; gap: 10px; }

        .social-icon {
          width: 36px; height: 36px;
          border-radius: 9px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center;
          color: #64748b; text-decoration: none;
          transition: all 0.2s ease;
        }

        .social-icon:hover {
          background: rgba(59,130,246,0.12);
          border-color: rgba(59,130,246,0.3);
          color: #60a5fa;
          transform: translateY(-2px);
        }

        .btn-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }

        .btn-connect {
          display: inline-flex; align-items: center; gap: 7px;
          background: linear-gradient(135deg, #25d366, #128c7e);
          color: #fff; border: none; border-radius: 10px;
          padding: 11px 22px;
          font-family: 'Mulish', sans-serif;
          font-size: 13px; font-weight: 700;
          cursor: pointer; text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 4px 18px rgba(37,211,102,0.22);
        }

        .btn-connect:hover { transform: translateY(-2px); box-shadow: 0 8px 26px rgba(37,211,102,0.32); opacity: 0.9; }

        .btn-resume {
          display: inline-flex; align-items: center; gap: 5px;
          background: transparent; color: #94a3b8;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px; padding: 11px 20px;
          font-family: 'Mulish', sans-serif;
          font-size: 13px; font-weight: 600;
          cursor: pointer; text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-resume:hover { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.18); color: #e2e8f0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fade-1 { animation: fadeUp 0.55s ease both 0.05s; }
        .fade-2 { animation: fadeUp 0.55s ease both 0.15s; }
        .fade-3 { animation: fadeUp 0.55s ease both 0.25s; }
        .fade-4 { animation: fadeUp 0.55s ease both 0.35s; }
        .fade-5 { animation: fadeUp 0.55s ease both 0.45s; }
        .fade-6 { animation: fadeUp 0.55s ease both 0.55s; }
        .fade-7 { animation: fadeUp 0.55s ease both 0.65s; }

        /* ── MOBILE overrides ── */
        @media (max-width: 767px) {
          .hero-root {
            min-height: unset;
            height: auto;
            padding: 16px 16px 80px;
            align-items: flex-start;
          }
          .hero-inner {
            flex-direction: column;
            align-items: center;
            gap: 14px;
          }
          .hero-image-wrap {
            width: 90px;
            margin: 0 auto;
          }
          .hero-img {
            width: 90px;
            height: 110px;
            border-radius: 12px;
          }
          .hero-image-wrap::before { border-radius: 14px; inset: -3px; }
          .hero-image-wrap::after  { border-radius: 13px; }
          .status-dot {
            right: -6px; bottom: 6px;
            font-size: 9px;
            padding: 3px 7px 3px 5px;
            gap: 4px;
          }
          .dot-pulse { width: 6px; height: 6px; }
          .hero-content {
            align-items: center;
            text-align: center;
            gap: 8px;
            width: 100%;
          }
          .hero-tag { font-size: 9px; padding: 3px 10px; }
          .hero-name { font-size: 28px; line-height: 1.05; }
          .hero-designation { font-size: 11px; }
          .hero-divider { margin: 0 auto; width: 28px; height: 2px; }
          .hero-desc { font-size: 11px; line-height: 1.55; text-align: center; }
          .stats-row { justify-content: center; gap: 14px; }
          .stat-value { font-size: 16px; }
          .stat-label { font-size: 8.5px; }
          .stat-sep   { height: 26px; }
          .social-row { justify-content: center; gap: 8px; }
          .social-icon { width: 34px; height: 34px; border-radius: 8px; }
          .btn-row { flex-direction: row; width: 100%; gap: 8px; }
          .btn-connect, .btn-resume {
            flex: 1;
            justify-content: center;
            padding: 9px 10px;
            font-size: 11px;
            border-radius: 8px;
            gap: 4px;
          }
        }
      `}</style>

      <section className="hero-root">
        <div className="hero-blob-tl" />
        <div className="hero-blob-br" />

        <div className="hero-inner">

          {/* LEFT — Profile image */}
          <div className="hero-image-wrap fade-1">
            <img src={ProfileImg} alt="Sriman Narayana" className="hero-img" />
            <div className="status-dot">
              <span className="dot-pulse" />
              Open to Work
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="hero-content">

            <div className="hero-tag fade-2">
              <Code2 size={11} />
              Frontend Developer
            </div>

            <h1 className="hero-name fade-3">
              Sriman<br />
              <span>Narayana</span>
            </h1>

            <p className="hero-designation fade-3">
              React.js Developer · <em>UI Engineer</em>
            </p>

            <div className="hero-divider fade-3" />

            <p className="hero-desc fade-4">
              Passionate frontend developer proficient in <strong>React.js</strong>,{" "}
              <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>. I craft
              responsive, pixel-perfect interfaces with a sharp eye for detail — turning
              complex Figma designs into fast, production-ready experiences.
            </p>

            <div className="stats-row fade-5">
              <div className="stat-item">
                <span className="stat-value">1+</span>
                <span className="stat-label">Years Exp.</span>
              </div>
              <div className="stat-sep" />
              <div className="stat-item">
                <span className="stat-value">2+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-sep" />
              <div className="stat-item">
                <span className="stat-value">8.5</span>
                <span className="stat-label">CGPA</span>
              </div>
            </div>

            <div className="social-row fade-6">
              <a href="https://github.com/Narayanasriman" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                <Github size={15} />
              </a>
              <a href="https://www.linkedin.com/in/sriman910/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                <Linkedin size={15} />
              </a>
              <a href="mailto:v.d.s.narayana2002@gmail.com" className="social-icon" title="Email">
                <Mail size={15} />
              </a>
            </div>

            <div className="btn-row fade-7">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-connect"
              >
                <MessageCircle size={14} fill="white" />
                Connect on WhatsApp
              </a>
              <button
                className="btn-resume"
                onClick={() => window.open(resume, "_blank")}
              >
                View Resume
                <ArrowUpRight size={13} />
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}