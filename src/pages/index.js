import * as React from "react";
import ProjectCard from "../components/ProjectCard";

const pageStyles = {
  color: "#E6EDF3",
  padding: 48,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  background: "linear-gradient(180deg,#06060a 0%, #0b0b10 100%)",
  minHeight: "100vh",
  boxSizing: "border-box",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 12,
  maxWidth: 720,
};
const lead = {
  color: "#B8C7D6",
  fontSize: 16,
  maxWidth: 720,
  marginBottom: 24,
};

const projects = [
  {
    slug: "brahma-firelight",
    title: "Brahma-Firelight",
    tagline: "Rust-based JS runtime — zero-copy FFI, V8 integration, WASM-first.",
  },
  {
    slug: "dark-knight",
    title: "Dark-Knight",
    tagline: "Experimental coroutine micro-framework — low-latency scheduling.",
  },
  {
    slug: "brahma-react",
    title: "Brahma-React",
    tagline: "React starter + integration patterns for server-side Rust runtimes.",
  },
  {
    slug: "brahma-vue",
    title: "Brahma-Vue",
    tagline: "Vue + Vite starter tuned for WASM/Rust backends.",
  },
  {
    slug: "xlsx-fire",
    title: "XLSX-Fire",
    tagline: "High-performance spreadsheet processing (Rust-powered).",
  },
];

export default function IndexPage() {
  return (
    <main style={pageStyles}>
      {/* responsive + visual CSS (media queries) */}
      <style>{`
        :root {
          --max-width: 1100px;
          --hf-accent-start: #6E56FF;
          --hf-accent-end: #00C2D1;
        }

        /* logo / hero animations */
        @keyframes hf-pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.04); opacity: 0.98; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes hf-shine {
          0% { transform: translateX(-120%) rotate(10deg); opacity: 0; }
          50% { transform: translateX(0%) rotate(10deg); opacity: 0.6; }
          100% { transform: translateX(120%) rotate(10deg); opacity: 0; }
        }

        /* LOGO: larger on small screens so it reads clearly on mobile */
        .hf-logo-wrap {
          position: relative;
          width: 96px;
          height: 96px;
          border-radius: 16px;
          display: inline-block;
        }
        .hf-logo-img {
          width: 100%;
          height: 100%;
          border-radius: 12px;
          object-fit: cover;
          display: block;
          box-shadow: 0 8px 30px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.02) inset;
          animation: hf-pulse 3.6s ease-in-out infinite;
        }
        .hf-logo-glow {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 160%;
          height: 160%;
          border-radius: 50%;
          filter: blur(18px);
          pointer-events: none;
          background: radial-gradient(circle at 30% 30%, rgba(124,92,255,0.32), rgba(0,194,209,0.14) 40%, transparent 55%);
          opacity: 0.85;
          mix-blend-mode: screen;
        }
        .hf-logo-shine {
          position: absolute;
          left: -40%;
          top: 8%;
          width: 40%;
          height: 120%;
          background: linear-gradient(90deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.0) 100%);
          transform: rotate(10deg);
          animation: hf-shine 2.6s ease-in-out infinite;
          opacity: 0.0;
          pointer-events: none;
          mix-blend-mode: overlay;
        }

        /* Header layout responsiveness */
        .hf-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 8px 24px;
          box-sizing: border-box;
        }
        .hf-header-left {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .hf-mark {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg,var(--hf-accent-start),var(--hf-accent-end));
          font-weight: 800;
          color: #03111A;
          flex-shrink: 0;
        }
        .hf-nav {
          display: flex;
          gap: 14px;
          align-items: center;
        }
        .hf-nav a { color: #9FB6C9; text-decoration: none; }

        /* projects grid: use class so media queries work reliably */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 18px;
          margin-top: 18px;
        }

        /* small screens: stack header, enlarge logo hero, collapse nav */
        @media (max-width: 780px) {
          .hf-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            padding: 12px;
          }
          .hf-nav { display: none; } /* hide desktop nav on small screens */
          .hf-logo-wrap { width: 140px; height: 140px; } /* larger logo for mobile */
          .hf-logo-img { border-radius: 14px; }
        }

        @media (max-width: 420px) {
          .hf-logo-wrap { width: 120px; height: 120px; }
          .hf-logo-img { animation-duration: 4.2s; }
        }
      `}</style>

      {/* Centered logo block (hero-friendly, larger on mobile via CSS above) */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 8, marginBottom: 20 }}>
        <div className="hf-logo-wrap" role="img" aria-label="Hyper-Forge logo">
          <img
            src="https://avatars.githubusercontent.com/u/246836188?s=240&v=4"
            alt="Hyper-Forge logo"
            className="hf-logo-img"
            loading="eager"
            width={240}
            height={240}
            onError={(e) => {
              // fallback: hide broken img and inject simple initials fallback
              e.currentTarget.style.display = "none";
              const fallback = document.createElement("div");
              fallback.textContent = "HF";
              Object.assign(fallback.style, {
                width: "100%", height: "100%", display: "flex",
                alignItems: "center", justifyContent: "center",
                fontWeight: 900, color: "#03111A", background: "linear-gradient(135deg,#6E56FF,#00C2D1)",
                borderRadius: "12px", fontSize: "36px"
              });
              e.currentTarget.parentNode && e.currentTarget.parentNode.appendChild(fallback);
            }}
          />
          <div className="hf-logo-glow" />
          <div className="hf-logo-shine" />
        </div>
      </div>

      <header className="hf-header" style={{ width: "100%" }}>
        <div className="hf-header-left">
          <div className="hf-mark" aria-hidden>
            HF
          </div>
          <div>
            <h1 style={headingStyles}>Hyper-Forge</h1>
            <div style={{ color: "#9FB6C9", fontSize: 13 }}>Rust · V8 · WASM · high-performance infra</div>
          </div>
        </div>

        <nav className="hf-nav" aria-label="Main navigation">
          <a href="/docs" style={{ color: "#9FB6C9", textDecoration: "none" }}>Docs</a>
          <a href="/blog" style={{ color: "#9FB6C9", textDecoration: "none" }}>Blog</a>
          <a href="https://github.com/hyper-forge" style={{ color: "#9FB6C9", textDecoration: "none" }}>GitHub</a>
        </nav>
      </header>

      <section style={{ maxWidth: 1100, margin: "28px auto", padding: "8px 16px", boxSizing: "border-box" }}>
        <h2 style={{ color: "#F1F7FB", fontSize: 32, marginBottom: 6 }}>
          Build blazing-fast services — Rust × V8 × WASM
        </h2>
        <p style={lead}>
          Hyper-Forge is a collection of tiny, focused projects for building low-latency systems:
          runtimes, starters, and tools that make Rust and modern JS engines play nicely together.
        </p>

        <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap" }}>
          <a href="/docs/getting-started" style={{ padding: "10px 14px", borderRadius: 999, background: "#7C5CFF", color: "#041022", textDecoration: "none", fontWeight: 700 }}>Get started</a>
          <a href="/playground" style={{ padding: "10px 14px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.06)", color: "#9FB6C9", textDecoration: "none" }}>Playground</a>
        </div>

        <h3 style={{ marginTop: 36, marginBottom: 10, color: "#DCEAF6" }}>Explore projects</h3>
        <div className="projects-grid">
          {projects.map(p => (
            <ProjectCard
              key={p.slug}
              title={p.title}
              tagline={p.tagline}
              href={`/${p.slug}`}
            />
          ))}
        </div>
      </section>

      <footer style={{ maxWidth: 1100, margin: "48px auto 12px", padding: "8px 16px", color: "#8EA7BD", fontSize: 13 }}>
        © {new Date().getFullYear()} Hyper-Forge · hyperforge.in
      </footer>
    </main>
  );
}

export const Head = () => <title>Hyper-Forge · Home</title>;
