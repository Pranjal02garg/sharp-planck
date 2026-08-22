"use client";

import FadeIn from './FadeIn';

const SERVICES = [
  {
    number: '01',
    title: 'Deep Learning & Computer Vision',
    description:
      'Developing neural architectures with PyTorch and OpenCV — including custom GAN augmentation, ArcFace facial embeddings, DBSCAN clustering, and hybrid quantum-classical classifiers (QCNN).',
  },
  {
    number: '02',
    title: 'GenAI & Digital Watermarking',
    description:
      'Architecting unified Generative-AI frameworks and high-accuracy invisible watermarking pipelines (PSNR 54.95 dB, SSIM 0.997) for AI content certification and digital media protection.',
  },
  {
    number: '03',
    title: 'Cloud Systems & DevOps',
    description:
      'Building production-ready cloud architectures on AWS (ECS, ECR, App Runner) containerized with multi-stage Docker, PostgreSQL, Upstash Redis, and automated CI/CD pipelines.',
  },
  {
    number: '04',
    title: 'Robotics & AI Systems',
    description:
      'Studying Robotics and Artificial Intelligence at TIET with a focus on autonomous algorithms, intelligent systems, hardware-software integration, and techno-cultural engineering leadership.',
  },
  {
    number: '05',
    title: 'Full-Stack & Intelligent Apps',
    description:
      'Engineering enterprise web systems with dynamic form engines, 3-tier Role-Based Access Control (RBAC), OTP/QR verification, and interactive data dashboards using Streamlit and Python.',
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="text-center font-black uppercase text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28 leading-none font-kanit"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className="flex flex-row items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: '1px solid rgba(12, 12, 12, 0.15)',
                ...(i === SERVICES.length - 1
                  ? { borderBottom: '1px solid rgba(12, 12, 12, 0.15)' }
                  : {}),
              }}
            >
              <div
                className="shrink-0 font-black text-[#0C0C0C] leading-none font-kanit"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </div>

              <div className="group flex flex-col gap-3 sm:gap-4 md:gap-5 pt-2 sm:pt-3 md:pt-4 text-left">
                <h3
                  className="font-medium uppercase text-[#0C0C0C] leading-tight relative inline-block w-fit"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.title}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#0C0C0C]/60 transition-all duration-500 group-hover:w-full" />
                </h3>
                <p
                  className="font-light leading-relaxed text-[#0C0C0C] max-w-2xl"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.6,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
