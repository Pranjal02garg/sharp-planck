"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

const PROJECTS = [
  {
    number: '01',
    category: '3D & Web Engineering · Interactive',
    name: '3D Regex Visualizer',
    liveUrl: 'https://3dregex.vercel.app',
    col1Image1: '/3dregex-1.png',
    col1Image2: '/3dregex-2.png',
    col2Image: '/3dregex-3.png',
  },
  {
    number: '02',
    category: 'Campus-Funded Production System · Cloud Architecture',
    name: 'Multi-Gate Campus VMS',
    liveUrl: 'https://vsm-deploy.versel.app',
    col1Image1: '/vms-1.png',
    col1Image2: '/vms-2.png',
    col2Image: '/vms-3.png',
  },
];

const ProjectCard = ({ project, index, total }) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 h-[85vh] w-full mb-12 sm:mb-16"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.article
        style={{ scale }}
        className="origin-top mx-auto h-full w-full flex flex-col gap-4 sm:gap-6 md:gap-8 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8"
      >
        {/* Top row: number + meta + button */}
        <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 sm:gap-6">
          <div className="flex flex-row items-start gap-3 sm:gap-6 md:gap-10 min-w-0 w-full">
            <div
              className="shrink-0 font-black text-[#D7E2EA] leading-none font-kanit"
              style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
            >
              {project.number}
            </div>

            <div className="flex flex-col gap-1 sm:gap-2 pt-1 sm:pt-3 md:pt-4 min-w-0 flex-1">
              <span
                className="font-light uppercase tracking-widest text-[#D7E2EA]/60"
                style={{ fontSize: 'clamp(0.65rem, 1.2vw, 0.95rem)' }}
              >
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA] leading-tight"
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <div className="shrink-0 self-start sm:self-auto pt-1 sm:pt-2 md:pt-3 w-full sm:w-auto">
            <LiveProjectButton href={project.liveUrl} className="w-full sm:w-auto" />
          </div>
        </div>

        {/* Bottom row: two-column image preview grid */}
        <div className="grid grid-cols-[40%_60%] gap-3 sm:gap-4 md:gap-5 flex-1 min-h-0">
          {/* Left column - 2 stacked preview images */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 min-h-0">
            <div
              className="overflow-hidden rounded-[24px] sm:rounded-[36px] md:rounded-[44px] border border-[#D7E2EA]/15 bg-[#141418]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Image1}
                alt={`${project.name} preview 1`}
                className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500"
                loading="lazy"
                draggable={false}
              />
            </div>
            <div
              className="overflow-hidden rounded-[24px] sm:rounded-[36px] md:rounded-[44px] border border-[#D7E2EA]/15 bg-[#141418]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Image2}
                alt={`${project.name} preview 2`}
                className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>

          {/* Right column - 1 tall main preview image */}
          <div className="overflow-hidden rounded-[24px] sm:rounded-[36px] md:rounded-[44px] border border-[#D7E2EA]/15 bg-[#141418] min-h-0">
            <img
              src={project.col2Image}
              alt={`${project.name} preview 3`}
              className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500"
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef(null);

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

      <div ref={containerRef} className="mx-auto max-w-7xl">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            total={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
