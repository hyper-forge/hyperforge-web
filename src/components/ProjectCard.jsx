import * as React from "react";

export default function ProjectCard({ title, tagline, href }) {
  return (
    <a
      href={href}
      aria-label={`Explore ${title}`}
      className="
        group relative block p-5 rounded-xl
        bg-white/2 border border-white/10
        backdrop-blur-sm
        transition-all duration-300
        hover:-translate-y-2 hover:scale-[1.025]
        hover:border-white/20
        hover:shadow-[0_12px_28px_rgba(0,0,0,0.45)]
      "
    >
      {/* glowing edge on hover */}
      <div
        className="
          absolute inset-0 rounded-xl pointer-events-none opacity-0
          group-hover:opacity-40 transition-opacity duration-300
          bg-gradient-to-br from-[#6E56FF]/30 to-[#00C2D1]/20 blur-[18px]
        "
      />

      <div className="relative z-10">
        <div className="text-lg font-bold text-[#E6EDF3]">
          {title}
        </div>
        <div className="text-sm text-[#AFC5D6] mt-2">
          {tagline}
        </div>
      </div>
    </a>
  );
}
