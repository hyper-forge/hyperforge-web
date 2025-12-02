import * as React from "react";
import ProjectCard from "../components/ProjectCard";

/*
  Refined IndexPage with improved visual hierarchy, tighter spacing,
  and a less 'awkward' logo placement. Still uses Tailwind utilities.

  Key ideas:
  - Header stays compact and sticky with subtle blur.
  - Hero places a polished HF mark *beside* the headline (aligned) and
    uses layered glow + subtle vignette so the logo feels part of the layout.
  - Slightly larger type scale, clearer CTAs, and a lightweight project grid.
  - Mobile-friendly nav and an alternative compact logo fallback.
*/

const projects = [
  { slug: "brahma-firelight", title: "Brahma-Firelight", tagline: "Rust-based JS runtime — zero-copy FFI, V8 integration, WASM-first." },
  { slug: "dark-knight", title: "Dark-Knight", tagline: "Experimental coroutine micro-framework — low-latency scheduling." },
  { slug: "brahma-react", title: "Brahma-React", tagline: "React starter + integration patterns for server-side Rust runtimes." },
  { slug: "brahma-vue", title: "Brahma-Vue", tagline: "Vue + Vite starter tuned for WASM/Rust backends." },
  { slug: "xlsx-fire", title: "XLSX-Fire", tagline: "High-performance spreadsheet processing (Rust-powered)." },
];

export default function IndexPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#03060a] via-[#07101a] to-[#0b0b10] text-[#E6EDF3] antialiased">
      <style>{`
        /* subtle, performance-friendly keyframes */
        @keyframes hf-pulse { 0%{ transform: scale(1);} 50%{ transform: scale(1.03);} 100%{ transform: scale(1);} }
        @keyframes hf-shimmer { 0%{ transform: translateX(-120%) rotate(12deg); opacity: 0 } 50%{ transform: translateX(0) rotate(12deg); opacity: 0.6 } 100%{ transform: translateX(120%) rotate(12deg); opacity: 0 }
        .hf-pulse { animation: hf-pulse 3.8s ease-in-out infinite; }
        .hf-shimmer { animation: hf-shimmer 2.8s ease-in-out infinite; }
      `}</style>

      {/* Sticky header with blur for depth */}
      <header className="sticky top-0 z-40 backdrop-blur-sm bg-black/30 border-b border-white/6">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* compact circular mark with subtle ring */}
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#6E56FF] to-[#00C2D1] shadow-lg ring-1 ring-white/6">
              <span className="font-extrabold text-[#03111A]">HF</span>
              <span aria-hidden className="absolute inset-0 rounded-xl pointer-events-none mix-blend-screen opacity-60 blur-sm" />
            </div>

            <div>
              <div className="text-lg md:text-xl font-semibold leading-tight">Hyper‑Forge</div>
              <div className="text-[11px] text-[#9FB6C9]">Rust · V8 · WASM · low‑latency infra</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="/docs" className="text-[#9FB6C9] hover:text-white">Docs</a>
            <a href="/blog" className="text-[#9FB6C9] hover:text-white">Blog</a>
            <a href="https://github.com" className="text-[#9FB6C9] hover:text-white">GitHub</a>
          </nav>

          <div className="hidden sm:flex gap-3">
            <a href="/docs/getting-started" className="px-3 py-2 rounded-full bg-[#7C5CFF] text-[#041022] font-semibold text-sm">Get started</a>
            <a href="/playground" className="px-3 py-2 rounded-full border border-white/6 text-[#9FB6C9] text-sm">Playground</a>
          </div>

          {/* simple mobile nav button (progressive enhancement) */}
          <div className="md:hidden">
            <button aria-label="Open navigation menu" className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/6 bg-black/20">
              <span className="sr-only">Open navigation menu</span>
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5H18M0 7H18M0 12.5H18" stroke="#C9D7E3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-5 mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 flex gap-8">
          {/* polished logo block */}
          <div className="relative min-w-[112px] flex items-center justify-center">
            <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#6E56FF] to-[#00C2D1] flex items-center justify-center shadow-2xl hf-pulse">
              <img
                src="https://avatars.githubusercontent.com/u/246836188?s=240&v=4"
                alt="Hyper-Forge logo"
                className="w-24 h-24 rounded-lg object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>

            {/* soft glow behind the mark */}
            <div className="absolute -inset-4 rounded-3xl pointer-events-none mix-blend-screen opacity-60 blur-2xl" style={{background: 'radial-gradient(circle at 30% 30%, rgba(124,92,255,0.22), rgba(0,194,209,0.12) 40%, transparent 55%)'}} />

            {/* diagonal shimmer */}
            <div className="absolute left-[-10%] top-0 w-14 h-[140%] transform rotate-12 hf-shimmer opacity-50 pointer-events-none" />
          </div>

          {/* content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#F1F7FB] leading-tight">Build blazing‑fast services — Rust × V8 × WASM</h1>
            <p className="mt-4 text-[#B8C7D6] text-lg max-w-3xl">Hyper‑Forge is a collection of focused projects for building low‑latency systems: compact runtimes, WASM-first patterns, and tiny tools that make Rust and modern JS engines play nicely together.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/docs/getting-started" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#7C5CFF] text-[#041022] font-semibold">Get started</a>
              <a href="/playground" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/6 text-[#9FB6C9]">Playground</a>
              <a href="/projects/brahma-firelight" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/3 text-[#E6EDF3]">Brahma‑Firelight</a>
            </div>

            <div className="mt-5 text-sm text-[#8FAFC0]">Recent: Brahma‑Firelight v1.5.18 · Fast-path FFI · WASM perf improvements</div>
          </div>
        </div>

        {/* right column: highlights */}
        <aside className="hidden md:block bg-gradient-to-b from-white/3 to-transparent border border-white/6 rounded-xl p-5 text-sm text-[#C7D8E6] shadow-sm">
          <div className="font-semibold mb-3 text-white">Highlights</div>
          <ul className="space-y-3">
            <li className="text-sm"><span className="font-medium">Zero‑copy FFI</span> — minimize data copies between Rust & JS.</li>
            <li className="text-sm"><span className="font-medium">WASM-first</span> — runtimes designed for compact WebAssembly modules.</li>
            <li className="text-sm"><span className="font-medium">Tiny starters</span> — React / Vue starters tuned for WASM backends.</li>
          </ul>

          <div className="mt-4">
            <a href="/about" className="text-xs text-[#9FB6C9] hover:text-white">Read more →</a>
          </div>
        </aside>
      </section>

      {/* PROJECTS GRID */}
      <section className="max-w-6xl mx-auto px-5 mt-12">
        <h3 className="text-2xl font-semibold text-[#DCEAF6] mb-4">Explore projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <ProjectCard key={p.slug} title={p.title} tagline={p.tagline} href={`/${p.slug}`} />
          ))}
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-5 mt-12 py-8 text-sm text-[#8EA7BD] border-t border-white/6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Hyper‑Forge · hyperforge.in</div>
          <div className="text-xs text-[#9FB6C9]">Crafted for low‑latency infra. Want the logo adjusted further? Tell me precise size/gap and I’ll tweak it.</div>
        </div>
      </footer>
    </main>
  );
}

export const Head = () => <title>Hyper‑Forge · Home</title>;
 