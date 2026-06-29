"use client";

import FadeIn from './FadeIn';

const PROJECTS = []; // Empty project listing as requested

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] bg-[#0C0C0C] px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-16 sm:mb-20 md:mb-28 font-kanit"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-7xl">
        {PROJECTS.length === 0 ? (
          <FadeIn delay={0.15} y={20} className="w-full">
            <div className="flex flex-col items-center justify-center py-20 px-6 border border-[#D7E2EA]/10 rounded-[40px] bg-[#141418] text-center">
              <span className="font-light uppercase tracking-[0.25em] text-[#D7E2EA]/40 text-xs sm:text-sm mb-3">
                Portfolio Showcase
              </span>
              <h3 className="font-medium uppercase text-[#D7E2EA] text-base sm:text-lg tracking-widest leading-relaxed max-w-md">
                New creative engineering works are cooking. Check back soon.
              </h3>
            </div>
          </FadeIn>
        ) : null}
      </div>
    </section>
  );
};

export default ProjectsSection;
